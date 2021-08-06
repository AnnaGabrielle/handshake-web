<template>
  <div class="home">
    <div class="input-area">
        <input v-model="userSearch" class="input" type="text"/>
    </div>
    <div class="list-container">
      <UsersList :users="usersFiltered" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UsersList from '@/components/UsersList.vue';
import usersMock from '@/mocks/usersMock';
import { User } from '@/interfaces';

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
    usersFiltered(): User[] {
      return this.searchUser();
    },
  },
  methods: {
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
    searchEachFild(id: number) {
      const user = this.users.find((userFind) => userFind.id === id);
      if (!user) return;
      const foundField = (Object.values(user)).find((field) => {
        const processedField = this.processString(field.toString());
        return processedField.includes(this.processString(this.userSearch));
      });
      // eslint-disable-next-line consistent-return
      return foundField;
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
}

input {
  width: 50%;
  height: 48px;
  box-shadow: 0 0 9px 1px lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
  outline: none;
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
