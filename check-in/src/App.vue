<template>
  <div id="app">   
      <teacherzujian></teacherzujian>
  </div>
</template>

<script>

import teacherzujian from "./views/Teacher/Teacher"

export default {
  name: 'App',
  components: {
    teacherzujian
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
}
</style>
