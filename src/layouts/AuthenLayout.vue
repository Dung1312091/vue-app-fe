<template>
  <section class="grid-container">
    <header class="header p-20">
      <Header />
    </header>
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="main p-20">
      <router-view></router-view>
    </div>
    <div class="footer">Footer</div>
  </section>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';
import Header from './Header.vue';

export default {
  components: {
    Sidebar,
    Header
  }
};
</script>
<style scoped lang="scss">
.header {
  grid-area: header;
  background-color: #3f51b5;
  color: #fff;
}
.sidebar {
  grid-area: menu;
  border-right: 1px solid gray;
}
.main {
  grid-area: main;
  overflow: auto;
  background-color: #f4f5f8;
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
  background-color: #fff;
  height: 100%;
  grid-template-rows: 50px 1fr 40px;
  grid-template-columns: 300px 1fr;
}

.grid-container > div {
  background-color: #fff;
  text-align: center;
  font-size: 30px;
}
</style>
