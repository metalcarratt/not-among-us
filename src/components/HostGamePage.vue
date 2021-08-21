<template>
    <div>
        <h1>Not Among Us</h1>
        <label>Game code:</label>
        <p class="code">{{ code }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            code: ''
        }
    },
    async mounted() {
        const res = await axios.get('http://192.168.1.92:3000/new');
        console.log(res);
        this.code = res.data.gameId;
    }
}
</script>

<style scoped>
label {
    font-size: 30px;
    color: white;
}

.code {
    color: #b5b1b1;
    font-size: 40px;
    font-family: monospace;
}
</style>