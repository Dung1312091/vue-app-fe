<template>
  <ul class="sidebar">
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
.sidebar {
  list-style: none;
  text-align: left;
  padding: 0;
  a {
    text-decoration: none;
    width: 100%;
    display: block;
  }
  .router-link-active {
    color: red;
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>
