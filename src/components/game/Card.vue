<template>
    <div :class="['card', type]">
        <span class="border">
            <font-awesome-icon :icon="icon" class="corner top" />
            <h3>{{ title }}</h3>
            <font-awesome-icon :icon="imageIcon" :class="['image', imageColour]" />
            <label>{{ name }}</label>
            <p>{{ description }}</p>
            <font-awesome-icon :icon="icon" class="corner bottom" />
        </span>
    </div>
</template>

<script>
export default {
    props: [ 'title', 'icon', 'imageIcon', 'imageColour', 'type', 'name', 'description' ]
}
</script>