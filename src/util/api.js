import axios from 'axios';

const HOST = 'http://192.168.1.92:3000';

export default {
    async newGame() {
        const res = await axios.get(`${HOST}/game/new`);
        console.log(res);
        return res.data.id;
    },

    async newPlayer(code, player) {
        const res = await axios.post(`${HOST}/addPlayer`, {
            id: code,
            player: player
        });
        console.log(res);
    },

    async gameDetails(code) {
        const res = await axios.get(`${HOST}/game/${code}`);
        return res.data;
    }
}
