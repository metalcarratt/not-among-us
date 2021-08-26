<template>
    <div class="showCards">
        <h2>{{ title }}</h2>
        <button @click="$emit('close')">Close</button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>