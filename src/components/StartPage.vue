<template>
    <div>
        <h1>Not Among Us</h1>
        <form>
            <fieldset>
                <label>Join game:</label>
                <input type="text" placeholder="Enter code" />
                <button>Join Game</button>
            </fieldset>
            <fieldset>
                <label>Or:</label>
                <button @click="$emit('host')">Host Game</button>
            </fieldset>
        </form>
    </div>
</template>

<style scoped>

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