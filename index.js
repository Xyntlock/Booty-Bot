const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const { token } = require('./token.json')

class MyClient extends AkairoClient {
    constructor() {
        super({
            // Options for Akairo go here.
        }, {
            // Options for discord.js goes here.
        });

        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: '.'
        });

        this.listenerHandler = new ListenerHandler(this, {
          directory: './listeners/',
        });

        this.listenerHandler.setEmitters({
          commandHandler: this.commandHandler,
          listenerHandler: this.listenerHandler
        });

        this.listenerHandler.loadAll();
        this.commandHandler.loadAll();

    }
}

const client = new MyClient();
client.on('ready', () => {
  console.log('ready');
});
client.login(token);
