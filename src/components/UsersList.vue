<template>
  <div class="users-list">
    <div
      v-for="(user) in users"
      :key="user.id" class="user-card"
      @click="goToUserProfile(user.id)"
    >
      <div class="user-card__image" />

      <div class="user-card__info">
        <span class="user-card__info-name">{{ user.firstName }} {{ user.lastName }}</span>
        <span class="user-card__info-job">{{ user.currentJob }}</span>

        <div class="knowledges">Áreas de conhecimento:
          <Tag v-for="(knowledge, index) in user.knowledges" :key="5*index" :text="knowledge" />
        </div>
      </div>

      <button class="user-card__button">Ver perfil</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { User } from '@/interfaces';
import Tag from './Tag.vue';

export default Vue.extend({
  components: {
    Tag,
  },
  props: {
    users: {
      type: Array as Vue.PropType<User[]>,
      default: [],
    },
  },
  methods: {
    goToUserProfile(userId: number) {
      this.$router.push(`/perfil/${userId}`);
    },
  },
});
</script>

<style lang="scss" scoped>
$fontFamily: 'AprovaSans', sans-serif;

.users-list {
  width: 70%;
  background-color: #F5F5F5;
  border-radius: 8px;
  padding: 15px;
}

.user-card {
  height: 170px;
  margin-bottom: 15px;
  background: #FFF;
  box-shadow: 0 0 5px 1px lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  &__image {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background-image: url('../assets/images/fake-profile-2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
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
      letter-spacing: -0.6px;
    }

    &-job {
      font-style: italic;
    }

    .knowledges {
      display: flex;
      align-items: center;

      span {
        color: blue;
      }
    }
  }

  &__button {
    background: #65FF90;
    width: 140px;
    height: 45px;
    font-family: $fontFamily;
    font-size: 18px;
    margin: 0 25px;
    border-radius: 32px;

    &:hover {
      background: #4cec7a;
      color: #000;
      transition: all 80ms linear;
    }
  }
}
</style>
