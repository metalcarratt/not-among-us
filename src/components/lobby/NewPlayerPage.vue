<template>
    <div class="page">
        <h1>Not Among Us</h1>
        <NewPlayer :code="code" @player="updatePlayer" />
        <GameStats :gameId="code" @started="gameStarted" />
    </div>
</template>

<script>
import NewPlayer from './NewPlayer.vue';
import GameStats from './GameStats.vue';

export default {
    props: [ 'code' ],
    components: { NewPlayer, GameStats },
    methods: {
        updatePlayer(player) {
            this.$emit('player', player);
        },
        gameStarted(code) {
            this.$emit('gameStarted', code);
        }
    }
}
</script>