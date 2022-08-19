const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
           aliases: ['ping', 'jcbsmhascuteeyes']
        });
    }

    exec(message) {
        return message.channel.send('Pong!');
    }
};

module.exports = PingCommand;
