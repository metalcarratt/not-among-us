<template>
  <div id="app">
    <StartPage v-if="page === 'StartPage'" @host="page = 'HostPage'" />
    <HostGamePage v-else-if="page === 'HostPage'"/>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue';
import HostGamePage from './components/HostGamePage.vue';

export default {
  name: 'App',
  data() {
    return {
      page: 'StartPage'
    }
  },
  components: {
    StartPage, HostGamePage
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

h1 {
    color: #f15555;
    margin-top: 60px;
    font-size: 60px;
    text-shadow: 0px 0px 8px  #402121;
    text-decoration: underline;
}

</style>
