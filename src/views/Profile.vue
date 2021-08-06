<template>
  <div class="profile">
    <div class="profile__user">
      <div class="profile__user-card">
        <div class="profile__user-card-image" />

        <div class="profile__user-card-info">
          <span
            class="profile__user-card-info-name"
          >
            {{ user.firstName }} {{ user.lastName }}
          </span>
          <span>{{ user.currentJob }}</span>

          <div class="tags">Interesses:
            <Tag
              class="profile__user-card__info-interests"
              v-for="(interest, index) in user.interests"
              :key="index"
              :text="interest"
            />
          </div>

          <div class="tags">Áreas de conhecimento:
            <Tag
              class="profile__user-card__info-interests"
              v-for="(knowledge, index) in user.knowledges"
              :key="index"
              :text="knowledge"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="profile__section">
      <span>Quem sou eu</span>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos delectus sed molestias itaque.
        Eius cum consequatur nisi! Ex culpa voluptates ducimus,
        dignissimos animi provident minus similique
        quasi dolor corrupti tempore?
      </p>
    </div>

    <div class="profile__section">
      <span>Skills</span>

      <div class="skills-type">
        Hard skills

        <div class="tags-list">
          <Tag
            v-for="(knowledge, index) in user.skills.soft"
            :key="index"
            :text="knowledge"
          />
        </div>
      </div>

      <div class="skills-type">
        Soft skills

        <div class="tags-list">
          <Tag
            v-for="(knowledge, index) in user.skills.hard"
            :key="index"
            :text="knowledge"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import usersMock from '@/mocks/usersMock';
import { User } from '@/interfaces';
import Tag from '@/components/Tag.vue';

interface Data {
  user: User | null;
}

export default Vue.extend({
  components: {
    Tag,
  },
  data(): Data {
    return {
      user: null,
    };
  },
  computed: {
    profileUserId(): number {
      return Number(this.$route.params.id);
    },
  },
  mounted() {
    this.user = usersMock.find((u) => u.id === this.profileUserId) || null;
  },
});
</script>

<style lang="scss" scoped>
$fontFamily: 'AprovaSans', sans-serif;

.profile {
  padding-top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__user {
    width: 70%;

    &-card {
      height: 255px;
      margin-bottom: 15px;
      background: #C4C4C4;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;

      &-image {
        width: 175px;
        height: 175px;
        border-radius: 50%;
        margin: 0 50px 0 25px;
        background-image: url('../assets/images/fake-profile-2.jpg');
        background-size: cover;
        background-repeat: no-repeat;
      }

      &-info {
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
          letter-spacing: -1px;
        }

        .tags {
          display: flex;
          align-items: center;

          span {
            color: blue;
          }
        }
      }
    }
  }

  &__section {
    width: 70%;
    margin-bottom: 15px;
    padding: 25px;
    background: #C4C4C4;
    border-radius: 8px;
    font-family: $fontFamily;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: -1px;
    display: flex;
    flex-direction: column;

    p {
      font-weight: 400;
      font-size: 17px;
      margin-top: 18px;
      line-height: 26px;
    }

    .skills-type {
      font-size: 22px;
      font-style: italic;
      margin-top: 18px;

      .tags-list {
        display: flex;
      }

      .tag {
        font-style: initial;
        margin: 4px;
        margin-top: 10px;
      }
    }
  }
}
</style>
