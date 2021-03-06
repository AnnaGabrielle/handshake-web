<template>
  <div class="home">
    <div class="input-area">
        <div class="input-bar">
          <input
            v-model="userSearch"
            class="input"
            type="text"
            placeholder="Encontre suas conexões"
          />

          <md-icon class="search-icon">search</md-icon>
        </div>
    </div>

    <div v-if="usersFiltered.length" class="list-container">
      <UsersList :users="usersFiltered" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UsersList from '@/components/UsersList.vue';
import usersMock from '@/mocks/usersMock';
import { User } from '@/interfaces';
import axios from 'axios';

const DEFAULT_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI4MjMxMjU2LCJleHAiOjE2MzA4MjMyNTZ9.LGF8WdUoS2IW8ofyWeL9u0TB3-acCoYd5HoVOmGHGpg';
const HANDSHAKE_API_ENDPOINT = 'https://handshake-hackathon-api.herokuapp.com/users';

const getUsers = async () => {
  axios.interceptors.request.use((config) => {
    const headers = {
      ...config.headers,
      Authorization: DEFAULT_TOKEN,
    };
    return {
      ...config,
      headers,
    };
  });

  const response = await axios.get(HANDSHAKE_API_ENDPOINT);
  return response?.data;
};

interface Data {
  users: User[];
  userSearch: string;
}

export default Vue.extend({
  name: 'Home',
  components: {
    UsersList,
  },
  data(): Data {
    return {
      users: usersMock,
      userSearch: '',
    };
  },
  computed: {
    currentUser(): User {
      return this.$store.getters.currentUser;
    },
    usersFiltered(): User[] {
      return this.searchUser();
    },
  },
  mounted() {
    this.users = this.filterUsersByCurrentUserInterests();
  },
  methods: {
    filterUsersByCurrentUserInterests(): User[] {
      if (this.currentUser.interests.length === 0) return usersMock;

      return this.users.reduce((acc: User[], u: User) => {
        this.currentUser.interests.forEach((i) => {
          if (u.knowledges.includes(i)) {
            acc.push(u);
          }
        });
        return acc;
      }, []);
    },
    searchUser() {
      if (this.userSearch === '') return this.users;
      const allUsers = this.users.reduce((usersFounded: User[], user: User) => {
        const foundedField = this.searchEachFild(user.id);
        if (!foundedField) return usersFounded;
        usersFounded.push(user);
        return usersFounded;
      }, []);

      return allUsers;
    },
    searchEachFild(id: number): boolean {
      const user = this.users.find((userFind) => userFind.id === id);
      if (!user) return false;
      const wordArray = this.userSearch.split(/\s+/);
      if (wordArray.length === 1) {
        const foundField = (Object.values(user)).find((field) => {
          const processedField = this.processString(field.toString());
          return processedField.includes(this.processString(this.userSearch));
        });
        return foundField;
      }
      const foundField = wordArray.filter((word) => (Object.values(user)).find((field) => {
        const processedField = this.processString(field.toString());
        return processedField.includes(this.processString(word));
      }));
      if (foundField.length === wordArray.length) {
        return true;
      }
      return false;
    },
    processString(item: string) {
      return item
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  padding-top: 120px;
}

.input-area {
  display: flex;
  justify-content: center;

  .input-bar {
    position: relative;
    width: 800px;

    .search-icon {
      position: absolute;
      right: 12px;
      top: 12px;
    }
  }
}

input {
  width: 100%;
  height: 48px;
  box-shadow: 0 0 9px 1px lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
  padding-right: 50px;
  outline: none;
  font-size: 18px;
  font-family: 'AprovaSans', sans-serif;
}
input:focus {
  border: 1px solid #666;
}

.list-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
