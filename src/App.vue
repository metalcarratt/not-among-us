<template>
  <div id="app">
    <StartPage v-if="page === 'StartPage'" @host="page = 'HostPage'" @join="join" />
    <HostGamePage v-else-if="page === 'HostPage'" @startGame="startGame" @player="setPlayer" />
    <NewPlayerPage v-else-if="page === 'NewPage'" :code="code" @player="setPlayer" @gameStarted="startGame"/>
    <PlayGame v-else-if="page === 'PlayGame'" :gameId="code" :playerIn="player" />
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
      code: '',
      player: {}
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
    },
    setPlayer(player) {
      this.player = player;
    }
  }
}
</script>

<style lang="scss">
@import './styles/styles.scss';
</style>
