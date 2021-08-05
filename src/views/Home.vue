<template>
  <div>
    <Header />

    <div class="list-container">
      <UserCard :users="users" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import UserCard from '@/components/UserCard.vue';
import usersMock from '@/mocks/usersMock';
import { User } from '@/interfaces';

interface Data {
  users: User[];
}

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
    UserCard,
  },
  data(): Data {
    return {
      users: usersMock,
    };
  },
});
</script>

<style lang="scss" scoped>
.list-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
