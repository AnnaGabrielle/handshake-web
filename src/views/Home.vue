<template>
  <div>
    <div class="list-container">
      <UsersList :users="users" />
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
}

export default Vue.extend({
  name: 'Home',
  components: {
    UsersList,
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
  padding-top: 120px;
  display: flex;
  justify-content: center;
}
</style>
