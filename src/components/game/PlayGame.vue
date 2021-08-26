<template>
    <div class="outer play">
        <span class="banner">
            <h1>Not Among Us</h1>
            <Profile :player="player" type="banner" />
            <span class="right">
                <span class="action" @click="clickShowIdentityCards">
                    <font-awesome-icon icon="user-secret" />
                    <label>Identity</label>
                </span>
                
                <span class="action" @click="clickShowHandCards">
                    <font-awesome-icon icon="grip-horizontal" />
                    <label>Cards</label>
                </span>
            </span>
        </span>
        <div class="gameBoard">
            <span class="room" v-for="(room, roomIter) in rooms" :key="roomIter" @click="clickRoom(room)">
                <label class="sign">{{ room }}</label>
                <span class="floor">
                    <Profile :player="player" v-for="(player, playerIter) in playersInRoom(room)" :key="playerIter" type="token" />
                </span>
            </span>
        </div>
        <ShowCards title="Identity Card" v-if="showIdentityCards" @close="hideCards">
            <IdentityCard :identity="identity" />
        </ShowCards>
        <ShowCards title="Cards in Hand" v-if="showHandCards" @close="hideCards">
            <HandCards />
        </ShowCards>
    </div>
</template>

<script>
import api from '@/util/api.js';
import Profile from '@/components/Profile.vue';
import ShowCards from './ShowCards.vue';
import IdentityCard from './IdentityCard.vue';
import HandCards from './HandCards.vue';

export default {
    props: ['gameId', 'playerIn'],
    components: { Profile, ShowCards, IdentityCard, HandCards },
    data() {
        return {
            rooms: [
                "Vent",
                "Right Engine",
                "Prison",
                "Control",
                "Lounge",
                "Storage",
                "Security",
                "Left Engine",
                "Sickbay"
            ],
            game: {},
            player: {},
            showIdentityCards: false,
            showHandCards: false,
            identity: 'crew'
        }
    },
    computed: {
        players() {
            return this.game ? this.game.players : [];
        }
    },
    async mounted() {
        this.game = (await api.gameDetails(this.gameId)).game;
        this.player = this.game.players.find(player => player.id === this.playerIn.id);
    },
    methods: {
        playersInRoom(room) {
            return this.game.players ? this.game.players.filter(player => player.room === room) : [];
        },
        clickRoom(room) {
            this.player.room = room;
        },
        clickShowIdentityCards() {
            this.showIdentityCards = true;
        },
        clickShowHandCards() {
            this.showHandCards = true;
        },
        hideCards() {
            this.showIdentityCards = false;
            this.showHandCards = false;
        }
    }
}
</script>