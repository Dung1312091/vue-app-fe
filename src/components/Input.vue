<template>
  <!-- <input v-bind="$attrs" v-on="$listener" />
  </template>-->
  <div>
    <div>AAAAAAAA</div>
    <input placeholder="edit me" />
  </div>
</template>

<script>
export default {
  name: 'Input'
};
</script>

<style scoped lang="scss">
input {
  height: 44px;
  border-radius: 4px;
  min-width: 200px;
  width: 100%;
  max-width: 300px;
  padding-left: 10px;
  font-size: 14px;
  border: 1px solid #9a9696;
  outline: none;
  margin-bottom: 10px;
  &:focus,
  &:hover {
    border-color: #40a9ff;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
}
</style>
