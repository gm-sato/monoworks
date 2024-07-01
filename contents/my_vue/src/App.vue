<template>
  <div id="app">
    <Header />
    <Navbar />
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/global/Header.vue'
import Navbar from './components/global/Navbar.vue'
import Footer from './components/global/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/style.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
