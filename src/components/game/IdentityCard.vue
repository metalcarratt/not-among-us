<template>
<span>
    <Card
        title="Identity Card"
        icon="user-secret"
        imageIcon="user-tie"
        imageColour="blue"
        type="identity"
        name="Crew"
        description="Your mission is to fix all equipment on the ship."

    />
    <Card
        title="Identity Card"
        icon="user-secret"
        imageIcon="user-ninja"
        imageColour="black"
        type="identity"
        name="Traitor"
        description="Your mission is to sabotage the ship."
    />   
</span>
</template>

<script>
import Card from './Card.vue';

export default {
    props: ['identity'],
    components: { Card }
}
</script>