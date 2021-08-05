<template>
  <div class="card">

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { User } from '@/interfaces';

export default Vue.extend({
  props: {
    user: {
      type: Array as Vue.PropType<User[]>,
      default: [],
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 80%;
  height: 170px;
  background: #C4C4C4;
}
</style>
