import { AkairoClient, CommandHandler, ListenerHandler } from 'discord-akairo'
import config from './config'
import * as dotenv from 'dotenv'


function getConfig() {
  dotenv.config()
  try {
    const file = require('../token.json')
    console.log('Starting locally')
    return { token: file.token, prefix: config.testPrefix }
  } catch (error) {
    console.log('Starting on Heroku')
    return { token: process.env.TOKEN, prefix: config.prefix }
  }
}

const cfg = getConfig()

class MyClient extends AkairoClient {
  commandHandler: CommandHandler
  listenerHandler: ListenerHandler
  constructor() {
    super(
      {
        ownerID: `140150251213422592`,
      },
      {}
    )

    this.commandHandler = new CommandHandler(this, {
      directory: './dist/commands/',
      prefix: cfg['prefix'],
    })

    this.listenerHandler = new ListenerHandler(this, {
      directory: './dist/listeners/',
    })

    this.commandHandler.useListenerHandler(this.listenerHandler)

    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
      listenerHandler: this.listenerHandler,
    })

    this.listenerHandler.loadAll()
    this.commandHandler.loadAll()
  }
}

  const client = new MyClient()
  client.on('ready', () => {
    console.log('ready')
  })
  client.login(cfg['token'])
