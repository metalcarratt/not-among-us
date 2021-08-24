<template>
  <div id="app">
    <StartPage v-if="page === 'StartPage'" @host="page = 'HostPage'" @join="join" />
    <HostGamePage v-else-if="page === 'HostPage'" @startGame="startGame" />
    <NewPlayerPage v-else-if="page === 'NewPage'" :code="code" />
    <PlayGame v-else-if="page === 'PlayGame'" :gameId="code" />
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue';
import HostGamePage from './components/lobby/HostGamePage.vue';
import NewPlayerPage from './components/lobby/NewPlayerPage.vue';
import PlayGame from './components/game/PlayGame.vue';

export default {
  name: 'App',
  data() {
    return {
      page: 'StartPage',
      code: ''
    }
  },
  components: {
    StartPage, HostGamePage, NewPlayerPage, PlayGame
  },
  methods: {
    join(code) {
      this.code = code;
      this.page = 'NewPage';
    },
    startGame(code) {
      this.code = code;
      this.page = 'PlayGame';
    }
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
  height: 100%;
}

h1 {
    color: #f15555;
    margin-top: 60px;
    font-size: 60px;
    text-shadow: 0px 0px 8px  #402121;
    text-decoration: underline;
}

form, .page {
    /* width: 450px; */
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

button:hover {
  cursor: pointer;
}

button + button {
  margin-top: 20px;
}

.blue {
    background-color: #8585ff;
}

.red {
    background-color: #d85d5d;
}

.yellow {
    background-color: #e0df48;
}

.white {
    background-color: #f1f1ff;
}

.green {
    background-color: #4cce5f;
}

.purple {
    background-color: #874cce;
}

.brown {
    background-color: #c3913b;
}

.black {
    background-color: #2e312f;
}

.box {
  border: 1px solid #6767a7;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px #6767a7;
  padding: 40px;
  vertical-align: top;
  width: 340px;
}

.box + .box {
  margin-left: 40px;
}

.box2 {
  display: block;
  width: 340px;
  margin: 0 auto;
  padding: 40px;
}
</style>
