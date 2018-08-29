<template>
  <div id="app">
     <navbar-component></navbar-component>
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from '@/components//NavbarComponent.vue'
export default {
  name: 'App',
  components: {NavbarComponent}, 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  overflow-x: hidden;
}
</style>
