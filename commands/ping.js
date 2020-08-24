const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
           aliases: ['ping', 'jcbsmsmells']
        });
    }

    exec(message) {
        return message.channel.send('Pong!');
    }
};

module.exports = PingCommand;
