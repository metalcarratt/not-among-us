<template>
    <div class="box">
        <fieldset>
            <Profile :player="player" />
            <template v-if="creating">
                <p class="error-msg" v-if="error === 'name'">Please enter a name</p>
                <input type="text" placeholder="Name" :class="error === 'name' ? 'error' : ''" v-model="name" />
                <label class="left">Colour:</label>
                <ul class="options">
                    <li 
                        v-for="(colourp, colouri) in allColours"
                        :key="colouri"
                        :class="getClass(colourp)"
                        @click="colour = colourp"
                    >
                    </li>
                </ul>
                    
                <label class="left">Insignia:</label>
                <ul class="options">
                    <li
                        v-for="(iconp, iconi) in allIcons"
                        :key="iconi"
                        :class="getIconClass(iconp)"
                        @click="icon = iconp"
                    >
                        <font-awesome-icon :icon="iconp" />
                    </li>
                </ul>

                <button @click.prevent="join">Join</button>
            </template>
        </fieldset>
    </div>
</template>

<script>
import api from '@/util/api.js';
import Profile from '@/components/Profile.vue';

export default {
    props: [ 'code' ],
    components: { Profile },
    data() {
        return {
            status: 'creating',
            error: '',
            name: '',
            colour: 'blue',
            icon: 'tree',
            allColours: [
                'blue',
                'red',
                'yellow',
                'white',
                'green',
                'purple',
                'brown',
                'black'
            ],
            allIcons: [
                'tree',
                'ghost',
                'bomb',
                'pepper-hot',
                'cat',
                'kiwi-bird',
                'drumstick-bite',
                'plane',
                'dove',
                'cookie-bite',
                'coffee',
                'book'
            ]
        }
    },
    computed: {
        player() {
            return {
                colour: this.colour,
                icon: this.icon,
                name: this.name
            }
        },
        creating() {
            return this.status === 'creating';
        }
    },
    methods: {
        getClass(colour) {
            return [colour, this.colour === colour ? 'selected' : '']
        },
        getIconClass(icon) {
            return ['icon', this.icon === icon ? 'selected' : '']
        },
        async join() {
            this.error = '';
            if (!this.name) {
                this.error = "name";
            } else {
                const player = await api.newPlayer(this.code, this.player);
                this.status = 'created';
                this.$emit("player", player);
            }
        }
    }
}
</script>