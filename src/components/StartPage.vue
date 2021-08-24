<template>
    <div class="page">
        <h1>Not Among Us</h1>
        <div class="box">
            <fieldset>
                <label>Join game:</label>
                <input type="text" placeholder="Enter code" v-model="code" />
                <button @click="$emit('join', code)">Join Game</button>
            </fieldset>
            <fieldset>
                <label>Or:</label>
                <button @click="$emit('host')">Host Game</button>
            </fieldset>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            code: ''
        }
    }
}
</script>

<style scoped>




</style>