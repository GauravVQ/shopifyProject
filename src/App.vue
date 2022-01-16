<template>
  <div id="app">
  <filters/>
  </div>
</template>

<script>
import Filters from './components/Filters.vue'

export default {
  name: 'App',
  components: {
    Filters
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-image: url(https://i.ibb.co/rMNgNrS/Background-of-galaxy-and-stars.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden;
}
@media screen and (max-width: 900px) {
  body {
    overflow-y: auto !important;
  }
}
</style>
