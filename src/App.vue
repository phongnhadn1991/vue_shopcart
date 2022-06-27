<template>
  <div id="app">
    <div class="container">
      <Header></Header>
      <div class="main_content">
<!--        <keep-alive>-->
        <!-- <keep-alive include="ProductList,ProductManagerList"> -->
          <router-view></router-view>
        <!-- </keep-alive> -->
<!--        </keep-alive>-->


      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/particle/Header'
export default {
  name: 'App',
  components: {
    Header,
  },

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
