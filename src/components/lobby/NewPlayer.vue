<template>
    <div class="box">
        <fieldset>
            <Profile :player="player" />
            <template v-if="creating">
                <p class="error-msg" v-if="error === 'name'">Please enter a name</p>
                <input type="text" placeholder="Name" :class="error === 'name' ? 'error' : ''" v-model="name" />
                <label class="left">Colour:</label>
                <ul>
                    <li 
                        v-for="(colourp, colouri) in allColours"
                        :key="colouri"
                        :class="getClass(colourp)"
                        @click="colour = colourp"
                    >
                    </li>
                </ul>
                    
                <label class="left">Insignia:</label>
                <ul>
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
            icon: 'user-secret',
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
                'user-secret',
                'ghost',
                'bomb',
                'pepper-hot',
                'cat',
                'hat-wizard',
                'drumstick-bite',
                'plane'
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
                await api.newPlayer(this.code, this.player);
                this.status = 'created';
            }
        }
    }
}
</script>

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

li:hover {
    cursor: pointer;
}

li.icon {
    color: white;
    font-size: 35px;
}

li.icon svg {
    margin-top: 5px;
}



li.selected {
    border: 5px solid yellow;
}

.error {
    border: 5px solid red;
}

.error-msg {
    color: #ff8383;
    font-size: 25px;
}
</style>