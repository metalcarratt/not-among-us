<template>
    <div>
        <h1>Not Among Us</h1>
        <form>
            <fieldset>
                <label class="left">New Player:</label>
                <ul>
                    <li class="blue"></li>
                    <li class="red"></li>
                    <li class="yellow"></li>
                    <li class="white"></li>
                    <li class="green"></li>
                    <li class="purple"></li>
                    <li class="brown"></li>
                    <li class="black"></li>
                </ul>
                <input type="text" placeholder="Name" />
                <button>Join</button>
            </fieldset>
        </form>
    </div>
</template>

<style scoped>
ul {
    padding-left: 0;
}

li {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 5px;
    border: 3px solid black;
    border-radius: 10px;
}

li.blue {
    background-color: #8585ff;
}

li.red {
    background-color: #d85d5d;
}

li.yellow {
    background-color: #e0df48;
}

li.white {
    background-color: #f1f1ff;
}

li.green {
    background-color: #4cce5f;
}

li.purple {
    background-color: #874cce;
}

li.brown {
    background-color: #c3913b;
}

li.black {
    background-color: #2e312f;
}
</style>