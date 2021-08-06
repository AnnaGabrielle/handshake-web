<template>
  <portal to="connection-modal">
    <div v-if="showModal" class="modal-background" @click.self="$emit('onClose')">
      <div  @click.self="$emit('onClose')" class="modal">
        <div class="top">
          <img class="descologo" src="../assets/images/descologo.svg" alt="">
          <span>{{ modalTitle }}</span>
        </div>

        <div class="content">
          <span class="greeting">{{ greeting }}</span>
          <div class="message">
            <div class="img" />
            <div class="message-content">
              <ModalContactContent :profileUser="profileUser" v-if="contentType === 'contact'" />
              <ModalRatingContent @onClose="$emit('onClose')" v-if="contentType === 'rating'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </portal>
</template>

<script lang="ts">
import Vue from 'vue';
import { User } from '@/interfaces';
import ModalContactContent from './ModalContactContent.vue';
import ModalRatingContent from './ModalRatingContent.vue';

export default Vue.extend({
  components: { ModalContactContent, ModalRatingContent },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    contentType: {
      type: String,
      default: 'contact',
    },
    profileUser: {
      type: Object as Vue.PropType<User>,
      required: true,
    },
  },
  computed: {
    currentUser(): User {
      return this.$store.getters.currentUser;
    },
    modalTitle(): string {
      switch (this.contentType) {
        case 'contact':
          return 'Fale comigo!';

        case 'rating':
          return 'Recomendação';

        default:
          return 'Fale comigo!';
      }
    },
    greeting(): string {
      switch (this.contentType) {
        case 'contact':
          return `Olá, ${this.currentUser.firstName}!`;

        case 'rating':
          return 'O que você achou do nosso papo?';

        default:
          return 'Fale comigo!';
      }
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  font-family: 'AprovaSans';
}

.modal-background {
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 79px;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding-top: 25px;
}

.modal {
  width: 1100px;
  height: 420px;

  .descologo {
    width: 40px;
    margin-right: 20px;
  }

  .top {
    font-size: 35px;
    height: 100px;
    background: black;
    display: flex;
    align-items: center;
    color: white;
    font-weight: 700;
    letter-spacing: -1px;
    padding: 0 30px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }

  .content {
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0 0 32px 32px;
    padding: 40px 60px;

    .greeting {
      font-size: 35px;
      font-weight: 700;
      letter-spacing: -1px;
      margin-bottom: 20px;
    }

    .message {
      height: 280px;
      display: flex;
      border-radius: 32px;
      width: 80%;

      .img {
        width: 219px;
        height: 100%;
        background-image: url('../assets/images/connection-modal.jpg');
        background-size: cover;
        border-radius: 32px 0 0 32px;
        background-position: center;
      }

      .message-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 25px;
        font-family: 'AprovaSans';
        font-size: 19px;
        letter-spacing: -0.5px;
        flex-grow: 2;
        max-width: 500px;
      }
    }
  }
}
</style>
