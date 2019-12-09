<template>
  <div>
    <input
      v-bind="$attrs"
      v-bind:value="value"
      v-on="{
        ...$listeners,
        input: event => $emit('input', event.target.value)
      }"
    />
    <p v-if="error">{{ helperText }}</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['value', 'error', 'helperText']
};
</script>

<style scoped lang="scss">
div {
  min-width: 200px;
  width: 100%;
  max-width: 300px;
  input {
    height: 44px;
    border-radius: 4px;
    width: 100%;
    padding-left: 10px;
    font-size: 14px;
    border: 1px solid #9a9696;
    outline: none;
    margin-top: 10px;
    &:focus,
    &:hover {
      border-color: #40a9ff;
    }
    &:focus {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
  p {
    color: #f44336;
    font-size: 0.75rem;
    min-height: 1em;
    font-weight: 400;
    text-align: left;
    margin: 0;
  }
}
</style>
