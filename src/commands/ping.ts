import { Command } from 'discord-akairo'
import type { Message } from 'discord.js'

class PingCommand extends Command {
  constructor() {
    super('ping', {
      aliases: ['ping', 'jcbsmhascuteeyes'],
    })
  }

  exec(message: Message) {
    return message.channel.send('Pong!')
  }
}

module.exports = PingCommand
