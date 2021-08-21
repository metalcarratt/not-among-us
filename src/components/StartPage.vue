<template>
    <div>
        <h1>Not Among Us</h1>
        <form>
            <fieldset>
                <label>Join game:</label>
                <input type="text" placeholder="Enter code" />
                <button @click="$emit('join')">Join Game</button>
            </fieldset>
            <fieldset>
                <label>Or:</label>
                <button @click="$emit('host')">Host Game</button>
            </fieldset>
        </form>
    </div>
</template>

<style scoped>




</style>