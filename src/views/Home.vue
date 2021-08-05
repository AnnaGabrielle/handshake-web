<template>
  <div class="list-container">
    <UserCard />
  </div>
</template>

<script lang="ts">
import UserCard from '@/components/UserCard.vue';
import Vue from 'vue';

export default Vue.extend({
  components: { UserCard },
  name: 'Home',
});
</script>

<style lang="scss" scoped>
.list-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
