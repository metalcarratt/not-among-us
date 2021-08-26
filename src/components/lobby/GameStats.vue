<template>
    <div class="box stats">
        <label>Game code:</label>
        <p class="code">{{ gameId }}</p>
        <h2>Players:</h2>
        <span class="player" v-for="(player, playerIter) in players" :key="playerIter">
            <Profile :player="player" />
        </span>
    </div>
</template>

<script>
import api from '@/util/api.js';
import Profile from '@/components/Profile.vue';

export default {
    props: ['gameId'],
    components: { Profile },
    data() {
        return {
            polling: null,
            stats: {}
        }
    },
    mounted () {
        this.pollData()
    },
    beforeDestroy () {
        clearInterval(this.polling)
    },
    computed: {
        players() {
            return this.stats && this.stats.game ? this.stats.game.players : [];
        }
    },
    methods: {
        pollData () {
            this.polling = setInterval(this.poll, 1000);
        },
        async poll() {
            this.stats = await api.gameDetails(this.gameId);
            if (this.stats.game.status === 'started') {
                this.$emit('started', this.gameId);
            }
        }
    }
}
</script>