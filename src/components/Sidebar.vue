<template>
  <ul>
    <li v-for="(menu, index) in sidebarMenu" v-bind:key="index">
      <router-link exact v-bind:to="menu.to">{{ menu.name }}</router-link>
    </li>
  </ul>
</template>

<script>
import sidebarMenu from '../constains/sidebarMenu';

export default {
  name: 'Sidebar',
  data() {
    return {
      sidebarMenu: sidebarMenu
    };
  }
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  text-align: left;
  padding: 0;
  margin-top: 10px;
  a {
    text-decoration: none;
    width: 100%;
    display: block;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0 10px 20px;
    color: #000;
  }
  .router-link-active {
    color: #3f51b5;
    background: #ece7e6;
    border-radius: 0 20px 20px 0;
    width: 260px;
    transition: 250ms;
  }
}
</style>
