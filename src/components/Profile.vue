<template>
    <span class="outer_profile">
        <span :class="['3d', type === 'token' ? 'token' : '']">
            <span :class="['profile', player.colour]">
                <font-awesome-icon :icon="player.icon" />
            </span>
        </span>
        <label>{{ player.name }}</label>
    </span>
</template>

<script>
export default {
    props: ['player', 'type']
}
</script>

<style scoped>
label {
    font-size: 25px;
    margin-top: -10px;
}

.profile {
    border: 1px solid white;
    font-size: 80px;
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 30px;
    margin: 0 auto;
    margin-bottom: 20px;
}

.profile svg {
    margin-top: 20px;
    color: white;
}

.profile.white svg, .profile.yellow svg {
    color: #2e312f;
}

.token {
    display: inline-block;
    margin: 10px;
    height: 80px;
    border-radius: 15px;
    background: rgb(87,87,87);
    background: linear-gradient(90deg, rgba(87,87,87,1) 0%, rgba(142,141,141,1) 13%, rgba(186,186,186,1) 48%, rgba(145,145,145,1) 89%, rgba(101,100,100,1) 100%);

    box-shadow: -1px 1px 2px black;
}

.token .profile {
    width: 60px;
    height: 60px;
    font-size: 40px;
    border-radius: 15px;
}

.token .profile svg {
    margin-top: 10px;
}

.token + label {
    font-size: 20px;
    text-shadow: 0px 1px 2px black;
}
</style>