<template>
  <div class="input-custom">
    <input v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'Input'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './style.scss';
</style>
