<template>
  <div id="page">
    <div>
      <FirstForm @firstFormSaved="saveInfo"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FirstForm from '@/components/FirstForm.vue';

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
  methods: {
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
