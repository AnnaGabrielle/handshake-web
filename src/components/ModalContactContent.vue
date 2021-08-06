<template>
  <div class="container">
    <p>
      {{ profileUser.firstName }} pode ser contatado(a) a partir dos seguintes meios.
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
  props: {
    profileUser: Object as Vue.PropType<User>,
  },
  computed: {
    currentUser(): User {
      return this.$store.getters.currentUser;
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
