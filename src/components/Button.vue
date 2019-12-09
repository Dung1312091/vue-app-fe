<template>
  <button v-on="$listeners">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    title: String
  },
  methods: {
    click: function(event) {
      this.$emit('onClick', event, 'data');
    }
  }
};
</script>

<style scoped lang="scss">
button {
  height: 44px;
  border-radius: 4px;
  padding: 0 8px;
  min-width: 100px;
  font-size: 16px;
  background-color: #40a9ff;
  outline: none;
  cursor: pointer;
}
</style>
