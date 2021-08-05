<template>
  <div class="profile">
    <div class="users-list">
      <div class="user-card">
        <div class="user-card__image" />

        <div class="user-card__info">
          <span class="user-card__info-name">{{ users[0].firstName }} {{ users[0].lastName }}</span>
          <span>{{ users[0].currentJob }}</span>

          <div class="interests">Interesses:
            <span
              class="user-card__info-interest"
              v-for="(interest, index) in users[0].interests"
              :key="index"
            >
              {{ interest }}
            </span>
          </div>

          <div class="knowledges">Áreas de conhecimento:
            <span
              class="user-card__info-interest"
              v-for="(knowledge, index) in users[0].knowledges"
              :key="2*index"
            >
              {{ knowledge }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import usersMock from '@/mocks/usersMock';
import { User } from '@/interfaces';

interface Data {
  users: User[];
}

export default Vue.extend({
  data(): Data {
    return {
      users: usersMock,
    };
  },
  computed: {
    profileUserId(): number {
      return Number(this.$route.params.id);
    },
  },
});
</script>

<style lang="scss" scoped>
  $fontFamily: 'Atkinson Hyperlegible', sans-serif;

.profile {
  padding-top: 120px;
  display: flex;
  justify-content: center;
}

.users-list {
  width: 70%;
}

.user-card {
  height: 325px;
  margin-bottom: 15px;
  background: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  &__image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: white;
    margin: 0 50px 0 25px;
  }

  &__info {
    flex-grow: 1;
    text-align: start;
    font-size: 20px;

    span, div {
      font-family: $fontFamily;
      display: block;
      margin: 5px;
    }

    &-name {
      font-size: 32px;
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
