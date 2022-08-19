import { Command } from 'discord-akairo'
import type { Message } from 'discord.js'

class coinFlipCommand extends Command {
  public constructor() {
    super('coinflip', {
      aliases: ['coinflip', 'flip', 'jcbsmsmellsnice'],
    })
  }
  public exec(message: Message) {
    const number = Math.floor(Math.random() * 2)
    let response

    if (number === 1) {
      response = 'Heads'
    } else {
      response = 'Tails'
    }
    message.channel.send(response)
  }
}

module.exports = coinFlipCommand
