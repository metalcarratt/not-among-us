<template>
    <span :class="['outer_profile', type === 'token' ? 'token' : '', type === 'banner' ? 'bannerIcon' : '']">
        <span class="3d">
            <span :class="['profile', player.colour]">
                <font-awesome-icon :icon="player.icon" v-if="player.icon" />
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