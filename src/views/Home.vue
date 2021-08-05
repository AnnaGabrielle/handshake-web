<template>
  <div class="home">
    <Header />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
  },
});
</script>

<style lang="scss" scoped>
.home {
  font-family: 'Squada One', cursive;
  font-size: 50px;
}
</style>
