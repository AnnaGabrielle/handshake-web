<template>
  <portal to="connection-modal">
    <div v-if="showModal" class="modal-background" @click.self="$emit('onClose')">
      <div  @click.self="$emit('onClose')" class="modal">
        <div class="top">
          <img class="descologo" src="../assets/images/descologo.svg" alt="">
          <span>Fale comigo!</span>
        </div>

        <div class="content">
          <span class="greeting">Olá, {{ currentUser.firstName }}!</span>

          <div class="message">
            <div class="img" />
            <div class="message-content">
              <p>
                Fulano pode ser contatado a partir dos seguintes meios.
                Escolha um disponível e boa conversa! Handshake! :)
              </p>

              <div class="btns">
                <div class="first-btns-block">
                  <button :class="{ 'disabled': !currentUser.contact.whatsapp }">Whatsapp</button>
                  <button :class="{ 'disabled': !currentUser.contact.telegram }">Telegram</button>
                </div>

                <div class="last-btns-block">
                  <button :class="{ 'disabled': !currentUser.contact.facebook }">Facebook</button>
                  <button :class="{ 'disabled': !currentUser.contact.email }">E-mail</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </portal>
</template>

<script lang="ts">
import { User } from '@/interfaces';
import Vue from 'vue';

export default Vue.extend({
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentUser(): User {
      return this.$store.getters.currentUser;
    },
  },
  async mounted() {
    console.log(this.$store.getters.currentUser);
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
  width: 72%;
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
    align-items: flex-start;
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
      box-shadow: 0px 0px 7px 0.3px rgba(0,0,0,0.3);
      border-radius: 32px;

      .img {
        width: 320px;
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
        align-items: flex-start;
        padding: 25px;
        font-family: 'AprovaSans';
        font-size: 19px;
        letter-spacing: -0.5px;

        p {
          margin-bottom: 30px;
          line-height: 37px;
        }

        .btns {
          button {
            width: 175px;
            height: 40px;
            margin-right: 20px;
            border-radius: 26px;
            background: #65FF90;
            font-family: 'AprovaSans';
            font-size: 17px;
            font-weight: bold;
            box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.5);
          }

          .last-btns-block {
            display: block;
            margin-top: 20px;
          }

          .disabled {
            background: #C4C4C4;
            color: gray;
            cursor: not-allowed;
          }
        }
      }
    }
  }
}
</style>
