<template>
  <div id="page">
    <div v-if="!nextPage">
      <FirstForm @firstFormSaved="togglePages"/>
    </div>
    <div v-else>
      <button class="back-btn" @click="togglePages()">
      <md-icon class="icon">arrow_back_ios_new</md-icon>
    </button>
      <SecondForm @secondFormSaved="saveInfo"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FirstForm from '@/components/FirstForm.vue';
import SecondForm from '@/components/icons/SecondForm.vue';

export default Vue.extend({
  components: {
    FirstForm,
    SecondForm,
  },
  data() {
    return {
      nextPage: false,
      saveFirstForm: false,
      saveSecondForm: false,
    };
  },
  methods: {
    togglePages() {
      this.nextPage = !this.nextPage;
      this.saveFirstForm = !this.saveFirstForm;
    },
    saveInfo() {
      this.saveSecondForm = true;
      this.$router.push('/');
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
