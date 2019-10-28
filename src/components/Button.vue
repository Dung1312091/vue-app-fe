<template>
  <button v-bind="$attrs" title="login" class="button-custom">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'Button'
};
</script>
<style scoped lang="scss">
.button-custom {
  outline: none;
  height: 36px;
  min-width: 100px;
  color: #fff;
  background-color: #1976d2;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.875rem;
}
</style>
