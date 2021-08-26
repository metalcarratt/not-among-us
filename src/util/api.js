import axios from 'axios';

const HOST = 'http://192.168.1.92:3000';

export default {
    async newGame() {
        console.log("#API# New Game");
        const res = await axios.get(`${HOST}/game/new`);
        console.log(res);
        return res.data.id;
    },

    async startGame(code) {
        console.log("#API# Start Game");
        await axios.get(`${HOST}/game/${code}/start`);
    },

    async newPlayer(code, player) {
        console.log("#API# New Player");
        const res = await axios.post(`${HOST}/addPlayer`, {
            id: code,
            player: player
        });
        console.log(res);
        return res.data.player;
    },

    async gameDetails(code) {
        const res = await axios.get(`${HOST}/game/${code}`);
        return res.data;
    }
}
