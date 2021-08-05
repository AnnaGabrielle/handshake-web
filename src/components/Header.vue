<template>
    <header>
      <div>
        <h5> Heandshake</h5>
      </div>
      <div class="profile" @click="profileToggle">
        <md-avatar class="md-avatar-icon md-primary">
          <img v-if="meUser.photo" :src="meUser.photo" alt="People">
          <div v-else> {{ userLetter }} </div>
        </md-avatar>
        <div class="name">
        {{ meUser.firstName }}
        </div>
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
  border-bottom: 2px solid rgba(153, 153, 153, 0.68) ;
  box-shadow: 0 0 5px #a8a8a8;
  padding: 20px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
h5 {
  color: #999;
  font-size: 26px;
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
