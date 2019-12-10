<template>
  <div id="app">
    <component v-bind:is="layout"></component>
    <!-- <router-link to="/login">Login</router-link>| <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>-->
  </div>
</template>
<script>
import AuthenLayout from './layouts/AuthenLayout.vue';
import GuestLayout from './layouts/GuestLayout.vue';
import { getToken } from './utils/localStore';

export default {
  data() {
    return {
      layout: getToken() ? 'authen-layout' : 'guest-layout'
    };
  },

  watch: {
    $route(to) {
      if (to.path === '/login') {
        this.layout = 'guest-layout';
      } else {
        if (this.layout !== 'authen-layout') {
          this.layout = 'authen-layout';
        }
      }
    }
  },

  components: {
    'authen-layout': AuthenLayout,
    'guest-layout': GuestLayout
    // define as many layouts you want for the application
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-s-b {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.p-20 {
  padding: 20px;
}
.full {
  width: 100%;
  height: 100%;
}
</style>
