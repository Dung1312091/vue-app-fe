<template>
  <section class="grid-container">
    <header class="header">
      <router-link to="/login">Login</router-link>| <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </header>
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">Footer</div>
  </section>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';

export default {
  components: {
    Sidebar
  }
};
</script>
<style scoped lang="scss">
.header {
  grid-area: header;
  background-color: #fff;
}
.sidebar {
  grid-area: menu;
  border-right: 1px solid gray;
}
.main {
  grid-area: main;
  overflow: auto;
}
.footer {
  grid-area: footer;
  border-top: 1px solid gray;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main main main'
    'menu footer footer footer footer footer';
  background-color: #2196f3;
  height: 100%;
  grid-template-rows: 50px 1fr 40px;
  grid-template-columns: 300px 1fr;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
}
</style>
