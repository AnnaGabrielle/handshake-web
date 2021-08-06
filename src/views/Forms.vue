<template>
  <div id="page">
    <div>
      <FirstForm @firstFormSaved="saveInfo" :userInfo="userInfo"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FirstForm from '@/components/FirstForm.vue';
import { User } from '@/interfaces';

interface UserInfomation {
  selectedHardSkills: Array<string>;
  selectedSoftSkills: Array<string>;
  selectedInterestedArea: Array<string>;
  selectedKnownArea: Array<string>;
}

export default Vue.extend({
  components: {
    FirstForm,
  },
  data() {
    return {
      nextPage: false,
      saveFirstForm: false,
      saveSecondForm: false,
    };
  },
  computed: {
    currentUser(): User {
      return this.$store.getters.currentUser;
    },
    userInfo(): UserInfomation {
      return {
        selectedHardSkills: this.currentUser?.skills.hard || [],
        selectedSoftSkills: this.currentUser?.skills.soft || [],
        selectedInterestedArea: this.currentUser?.interests || [],
        selectedKnownArea: this.currentUser?.knowledges || [],
      };
    },
  },
  methods: {
    saveInfo() {
      this.saveSecondForm = true;
      this.$router.push('/inicio');
    },
  },
});
</script>

<style lang="scss" scoped>
.back-btn {
    position: fixed;
    top: 100px;
    left: 30px;
    background: white;
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
</style>
