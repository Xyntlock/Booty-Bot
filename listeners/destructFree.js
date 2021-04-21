const { Listener } = require('discord-akairo');

let keycodes = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

let keycode1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let keycode2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function setCode() {
    keycode1.sort(() => Math.random() - 0.5);
    keycode2.sort(() => Math.random() - 0.5);
}

setInterval(setCode, 3600000);

class destructListener extends Listener {
    constructor(){
        super('destructFree', {
            emitter: 'client',
            event: 'message'
        });
    }

    exec(message) {
        let code1 = keycode1[0];
        let code2 = keycode2[0];
        let destructChat = message.guild.channels.cache.get(`802232326050414633`);
        
        if (message.channel !== destructChat) {
            return;
        }
        
        console.log(code);
        if(message.content === `${code1}${code2}`) {
            let role = message.guild.roles.cache.find(r => r.name === "Self Destructed");
            message.member.roles.remove(role);
            setCode();
        }
    }
}

module.exports = destructListener;