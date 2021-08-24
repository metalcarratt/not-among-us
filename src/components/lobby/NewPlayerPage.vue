<template>
    <div class="page">
        <h1>Not Among Us</h1>
        <NewPlayer :code="code" />
        <GameStats :gameId="code" />
    </div>
</template>

<script>
import NewPlayer from './NewPlayer.vue';
import GameStats from './GameStats.vue';

export default {
    props: [ 'code' ],
    components: { NewPlayer, GameStats },
}
</script>