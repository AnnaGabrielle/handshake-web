<template>
  <div>
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
</template>

<script lang="ts">
import { User } from '@/interfaces';
import Vue from 'vue';

export default Vue.extend({
  computed: {
    currentUser(): User {
      return this.$store.getters.currentUser;
    },
  },
});
</script>

<style lang="scss" scoped>
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
</style>
