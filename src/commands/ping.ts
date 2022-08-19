import { Command } from 'discord-akairo'
import type { Message } from 'discord.js'

class PingCommand extends Command {
  public constructor() {
    super('ping', {
      aliases: ['ping', 'jcbsmhascuteeyes'],
    })
  }

  public exec(message: Message) {
    return message.channel.send('Pong!')
  }
}

module.exports = PingCommand
