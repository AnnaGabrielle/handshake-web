<template>
    <header>
      <div class="app-name" @click="goToHome()">
        <img src="../assets/images/descologo.svg" alt="">
        <h5>Handshake</h5>
      </div>

      <div v-if="!isSignUpRoute" class="profile" @click="goToProfile()">
        <md-avatar class="md-avatar-icon md-primary">
          <img v-if="currentUser.photo" :src="currentUser.photo" alt="People">
          <div v-else> {{ userLetter }} </div>
        </md-avatar>
        <div class="name">
          {{ currentUser.firstName }}
        </div>
      </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { User } from '@/interfaces';

export default Vue.extend({
  computed: {
    currentUser(): User {
      return this.$store.getters.currentUser;
    },
    userLetter(): string {
      return this.currentUser.firstName[0] + this.currentUser.lastName[0];
    },
    isSignUpRoute(): boolean {
      return this.$route.path.includes('/cadastro');
    },
  },
  data() {
    return {
      profileOpen: false,
    };
  },
  methods: {
    goToProfile() {
      this.$router.push(`/perfil/${this.currentUser.id}`);
    },
    goToHome() {
      this.$router.push('/inicio');
    },
  },
});
</script>

<style lang="scss" scoped>
$fontFamily: 'AprovaSans', sans-serif;

* {
  font-family: $fontFamily;
}

header {
  width: 100vw;
  background: white;
  border-bottom: 2px solid rgba(153, 153, 153, 0.68) ;
  box-shadow: 0 0 5px #a8a8a8;
  padding: 20px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 4;
}

.app-name {
  display: flex;
  cursor: pointer;
}

h5 {
  color: #999;
  font-size: 26px;
  font-weight: bold;
  margin-left: 8px;
  letter-spacing: -1px;

  &:hover {
    color: rgb(104, 104, 104);
    transition: all 200ms linear;
  }
}

.profile {
  cursor: pointer;
  display: flex;
      align-items: center;
}

.name {
  width: 60px;
  height: 24px;
  margin: 0 10px 0 10px;
  font-size: 20px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
