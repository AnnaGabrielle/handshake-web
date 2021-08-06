<template>
  <div class="container">
    <p>
      Fulano pode ser contatado a partir dos seguintes meios.
      Escolha um disponível e boa conversa! Handshake! :)
    </p>
    <div class="btns">
      <div class="first-btns-block">
        <button
          :class="{ 'disabled': !whatsapp }"
          @click="openWhatsApp()">
          Whatsapp
        </button>
        <button
        :class="{ 'disabled': !telegram }"
        @click="openTelegram()">
        Telegram</button>
      </div>
      <div class="last-btns-block">
        <button
          :class="{ 'disabled': !facebook }"
          @click="openFacebook()"
          >Facebook
        </button>
        <button
          :class="{ 'disabled': !email }"
          @click="openEmail()"
          >E-mail
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from '@/interfaces';
import Vue from 'vue';

export default Vue.extend({
  props: {
    profileUser: Object as Vue.PropType<User>,
  },
  computed: {
    currentUser(): User {
      return this.$store.getters.currentUser;
    },
    whatsapp(): string {
      return this.profileUser.contact?.whatsapp || '';
    },
    telegram(): string {
      return this.profileUser.contact?.telegram || '';
    },
    facebook(): string {
      return this.profileUser.contact?.facebook || '';
    },
    email(): string {
      return this.profileUser.contact?.email || '';
    },
  },
  methods: {
    openWhatsApp() {
      if (!this.whatsapp) return;

      if (!this.profileUser.contact.whatsapp) return;
      const messegeWhatsapp = `Oi, ${this.profileUser.firstName} ${this.profileUser.lastName}! Eu sou ${this.currentUser.firstName} ${this.currentUser.lastName} e te encontrei no Handshake! Podemos nos falar?%20
      `;
      const whatsappURL = `https://api.whatsapp.com/send?phone=${this.profileUser.contact.whatsapp}&text=${messegeWhatsapp}`;
      window.open(whatsappURL);
    },
    openTelegram() {
      if (!this.telegram) return;

      if (!this.profileUser.contact.telegram) return;
      const telegramURL = `https://t.me/${this.profileUser.contact.telegram}`;
      window.open(telegramURL);
    },
    openFacebook() {
      if (!this.facebook) return;

      if (!this.profileUser.contact.facebook) return;
      window.open(this.profileUser.contact.facebook);
    },
    openEmail() {
      if (!this.email) return;

      if (!this.profileUser.contact.email) return;
      window.location.href = `mailto:${this.profileUser.contact.email}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130%;
}

p {
  margin-bottom: 30px;
  line-height: 37px;
}

.btns {
  button {
    width: 175px;
    height: 50px;
    margin-right: 12px;
    border-radius: 26px;
    background: #c4c4c446;
    font-family: 'AprovaSans';
    font-size: 17px;
    font-weight: bold;
    transition: all 100ms linear;

    &:hover {
      background: #65FF90;
    }
  }

  .last-btns-block {
    display: block;
    margin-top: 12px;
  }

  .disabled {
    background: #c4c4c446;
    color: gray;
    cursor: not-allowed;

    &:hover {
      background: #c4c4c446;
    }
  }
}
</style>
