<template>
  <div class="profile">
    <button class="back-btn" @click="redirectToHome()">
      <md-icon class="icon">arrow_back_ios_new</md-icon>
    </button>

    <div class="profile__user">
      <div class="profile__user-card">
        <div class="profile__user-card-image" />

        <div class="profile__user-card-info">
          <span
            class="profile__user-card-info-name"
          >
            {{ profileUser.firstName }} {{ profileUser.lastName }}
          </span>
          <span>{{ profileUser.currentJob }}</span>

          <div class="tags">Interesses:
            <Tag
              class="profile__user-card__info-interests"
              v-for="(interest, index) in profileUser.interests"
              :key="index"
              :text="interest"
            />
          </div>

          <div class="tags">Áreas de conhecimento:
            <Tag
              class="profile__user-card__info-interests"
              v-for="(knowledge, index) in profileUser.knowledges"
              :key="index"
              :text="knowledge"
            />
          </div>
        </div>

        <div class="btns">
          <button class="profile__user-card-contact" @click="toggleModal('contact')">
            Fale comigo!
          </button>
          <button class="profile__user-card-contact" @click="toggleModal('rating')">
            Recomendar
          </button>
        </div>
      </div>
    </div>

    <div v-if="profileUser.bio" class="profile__section">
      <span>Quem sou eu</span>

      <p>
        {{ profileUser.bio }}
      </p>
    </div>

    <div class="profile__section">
      <span>Skills</span>

      <div class="skills-type">
        Hard skills

        <div class="tags-list">
          <Tag
            v-for="(knowledge, index) in profileUser.skills.soft"
            :key="index"
            :text="knowledge"
          />
        </div>
      </div>

      <div class="skills-type">
        Soft skills

        <div class="tags-list">
          <Tag
            v-for="(knowledge, index) in profileUser.skills.hard"
            :key="index"
            :text="knowledge"
          />
        </div>
      </div>
    </div>

    <div v-if="showContactModal">
      <ContentModal
        :contentType="modalType"
        :showModal="showContactModal"
        :profileUser="profileUser"
        @onClose="toggleModal()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import usersMock from '@/mocks/usersMock';
import { User } from '@/interfaces';
import Tag from '@/components/Tag.vue';
import ContentModal from '@/components/ContentModal.vue';

interface Data {
  profileUser: User | null;
  showContactModal: boolean;
  modalType: string;
}

export default Vue.extend({
  components: {
    Tag,
    ContentModal,
  },
  data(): Data {
    return {
      profileUser: null,
      showContactModal: false,
      modalType: 'contact',
    };
  },
  computed: {
    profileUserId(): number {
      return Number(this.$route.params.id);
    },
  },
  mounted() {
    this.profileUser = usersMock.find((u) => u.id === this.profileUserId) || null;
  },
  methods: {
    redirectToHome() {
      this.$router.push('/');
    },
    toggleModal(modalType: 'contact' | 'rating') {
      this.modalType = modalType;
      this.showContactModal = !this.showContactModal;
    },
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

  .back-btn {
    position: absolute;
    top: 100px;
    left: 30px;
    background: none;
    border-radius: 50%;
    border: 1px solid black;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      color: black;
    }
  }

  &__user {
    width: 70%;

    &-card {
      height: 255px;
      margin-bottom: 15px;
      background: #fff;
      box-shadow: 0 0 11px 1px lightgray;
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

      &-contact {
        width: 180px;
        height: 45px;
        font-family: $fontFamily;
        font-size: 18px;
        margin: 0 25px;
        border-radius: 32px;
        background: #65ff90;

        &:hover {
          background: #4cec7a;
          color: #000;
          transition: all 80ms linear;
        }
      }

      .btns {
        display: flex;
        flex-direction: column;

        button:last-child {
          margin-top: 15px;
          background: rgba(196, 196, 196, 0.2);
          color: black;

          &:hover {
            background-color: rgb(224, 224, 224);
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
    background: #fff;
    box-shadow: 0 0 11px 1px lightgray;

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
