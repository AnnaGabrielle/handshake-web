<template>
  <div class="users-list">
    <div v-for="(user) in users" :key="user.id" class="user-card">
      <div class="user-card__image" />

      <div class="user-card__info">
        <span class="user-card__info-name">{{ user.firstName }} {{ user.lastName }}</span>
        <span>{{ user.currentJob }}</span>

        <div class="interests">Interesses:
          <span
            class="user-card__info-interest"
            v-for="(interest, index) in user.interests"
            :key="index"
          >
            {{ interest }}
          </span>
        </div>

        <div class="knowledges">Áreas de conhecimento:
          <span
            class="user-card__info-knowledge"
            v-for="(knowledge, index) in user.knowledges"
            :key="2*index"
          >
            {{ knowledge }}
          </span>
        </div>
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
$fontFamily: 'Atkinson Hyperlegible', sans-serif;

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
    margin: 0 50px 0 25px;
  }

  &__info {
    flex-grow: 1;
    text-align: start;
    font-size: 17px;

    span, div {
      font-family: $fontFamily;
      display: block;
      margin: 5px;
    }

    &-name {
      font-size: 27px;
      font-weight: bold;
      margin-bottom: 12px !important;
    }

    .interests, .knowledges {
      display: flex;
      align-items: center;

      span {
        color: blue;
      }
    }
  }
}
</style>
