<template>
    <span>
        <Card
            title="Action Card"
            icon="arrow-alt-circle-right"
            type="action"
            v-for="(card, cardIter) in cards"
            :imageIcon="card.icon"
            :imageColour="card.colour"
            :name="card.name"
            :description="card.description"
            :key="cardIter"
        />
    </span>
</template>

<script>
import Card from './Card.vue';

const cards = [
    {
        icon: "key",
        colour: "gold",
        name: "Unlock room",
        description: "Unlocks a room that has been locked."
    },
    {
        icon: "key",
        colour: "black",
        name: "Lock room",
        description: "Locks a room that is unlocked."
    },
    {
        icon: "hammer",
        colour: "red",
        name: "Damage",
        description: "Damage a room's equipment"
    },
    {
        icon: "tools",
        colour: "blue",
        name: "Repair",
        description: "Repair a room's equipment"
    },
    {
        icon: "spray-can",
        colour: "grey",
        name: "Fog",
        description: "Cancel all actions in a room"
    },
    {
        icon: "skull",
        colour: "red",
        name: "Attack Player",
        description: "Player is sent to the Sickbay"
    },
    {
        icon: "user-md",
        colour: "green",
        name: "Heal Player",
        description: "Player is returned from the Sickbay"
    },
    {
        icon: "door-closed",
        colour: "black",
        name: "Send to Jail",
        description: "Send a player to jail"
    },
    {
        icon: "door-open",
        colour: "gold",
        name: "Release from Jail",
        description: "Release a player from jail"
    },
    {
        icon: "mask",
        colour: "grey",
        name: "Steal",
        description: "Player looses all cards"
    }
]

export default {
    components: { Card },
    data() {
        return {
            cards: cards
        }
    }
}
</script>