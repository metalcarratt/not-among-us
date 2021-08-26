<template>
    <div class="page">
        <h1>Not Among Us</h1>
        <div class="box2">
            <button @click="join" v-if="!joinAsPlayer">Join as Player</button>
            <button @click="startGame">Start Game</button>
        </div>
        <NewPlayer :code="code" v-if="joinAsPlayer" @player="updatePlayer" />
        <GameStats :gameId="code" />
    </div>
</template>

<script>
import api from '@/util/api.js';
import GameStats from './GameStats.vue';
import NewPlayer from './NewPlayer.vue';

export default {
    data() {
        return {
            code: '',
            joinAsPlayer: false
        }
    },
    components: { GameStats, NewPlayer },
    async mounted() {
        this.code = await api.newGame();
    },
    methods: {
        join() {
            this.joinAsPlayer = true;
        },
        startGame() {
            this.$emit('startGame', this.code);
            api.startGame(this.code);
        },
        updatePlayer(player) {
            this.$emit('player', player);
        }
    }
}
</script>
