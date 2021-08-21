<template>
  <div id="app">
    <StartPage />
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue'

export default {
  name: 'App',
  components: {
    StartPage
  }
}
</script>

<style>
body, html {
  background-color: #51518e;
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
