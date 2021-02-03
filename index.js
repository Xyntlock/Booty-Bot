const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const config = require('./config.js')

function getConfig() {
  try{
    const file = require('./token.json')
    console.log('Starting locally')
    return {'token': file.token, 'prefix': config.testPrefix}
  }catch(error) {
    console.log('Starting on Heroku')
    return {'token': process.env.TOKEN, 'prefix': config.prefix}
  }
};

const cfg = getConfig();

class MyClient extends AkairoClient {
    constructor() {
        super({
            // Options for Akairo go here.
        }, {
            // Options for discord.js goes here.
        });

        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: cfg['prefix']
        });

        this.listenerHandler = new ListenerHandler(this, {
          directory: './listeners/',
        });

        this.commandHandler.useListenerHandler(this.listenerHandler);

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
client.login(cfg['token']);
