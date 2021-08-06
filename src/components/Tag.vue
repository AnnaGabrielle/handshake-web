<template>
  <div v-if="text" class="tag">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.tag {
  width: fit-content;
  padding: 2px 6px;
  height: 25px;
  background-color: #65FF90;
  display: flex !important;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
}
</style>
