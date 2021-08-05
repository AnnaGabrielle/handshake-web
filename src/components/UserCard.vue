<template>
  <div class="users-list">
    <div v-for="(user, index) in users" :key="index" class="user-card">
      <div class="user-card__image" />

      <div class="user-card__info">
        <span class="user-card__info-name">{{ user.firstName }} {{ user.lastName }}</span>
        <span>{{ user.currentJob }}</span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { User } from '@/interfaces';

export default Vue.extend({
  props: {
    users: {
      type: Array as Vue.PropType<User[]>,
      default: [],
    },
  },
});
</script>

<style lang="scss" scoped>
.users-list {
  width: 70%;
}

.user-card {
  height: 170px;
  margin-bottom: 15px;
  background: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  &__image {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background: white;
    margin: 0 50px;
  }

  &__info {
    flex-grow: 1;
    text-align: start;
    font-size: 21px;

    span {
      display: block;
      margin: 5px;
    }
  }
}
</style>
