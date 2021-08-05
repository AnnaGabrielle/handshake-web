<template>
    <header>
      <div>
        <h5>Handshake</h5>
      </div>
      <div class="profile" @click="profileToggle">
        <md-avatar class="md-avatar-icon md-primary">
          <img v-if="meUser.photo" src="https://image.flaticon.com/icons/png/512/194/194279.png" alt="People">
          <div v-else> {{ userLetter }} </div>
        </md-avatar>
      </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import meUser from '@/mocks/me-mock';

export default Vue.extend({
  computed: {
    meUser() {
      return meUser;
    },
    userLetter() {
      return meUser.firstName[0] + meUser.lastName[0];
    },
  },
  data() {
    return {
      profileOpen: false,
    };
  },
  methods: {
    profileToggle() {
      this.profileOpen = !this.profileOpen;
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  background: white;
  border-bottom: 2px solid rgba(153, 153, 153, 0.68) ;
  box-shadow: 0 0 5px #a8a8a8;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
}
h5 {
  color: #999;
  font-size: 24px;
}

.profile {
  cursor: pointer;
}
</style>
