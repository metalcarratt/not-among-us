<template>
  <div id="app">
    <StartPage v-if="page === 'StartPage'" @host="page = 'HostPage'" @join="page = 'NewPage'" />
    <HostGamePage v-else-if="page === 'HostPage'"/>
    <NewPlayerPage v-else-if="page === 'NewPage'"/>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue';
import HostGamePage from './components/HostGamePage.vue';
import NewPlayerPage from './components/NewPlayerPage.vue';

export default {
  name: 'App',
  data() {
    return {
      page: 'StartPage'
    }
  },
  components: {
    StartPage, HostGamePage, NewPlayerPage
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

form {
    width: 340px;
    margin: 0 auto;
    margin-top: 60px;
}

fieldset {
    border: none;
}

label {
    display: block;
    font-size: 30px;
    color: white;
    margin-bottom: 15px;
    margin-top: 15px;
}

label.left {
  text-align: left;
}

input {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #353569;
    margin-bottom: 5px;
    width: 100%;
    box-sizing: border-box;
}

button {
    width: 100%;
    box-sizing: border-box;

    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #353569;
    padding: 10px;
    background-color: #fbcd07;
}
</style>
