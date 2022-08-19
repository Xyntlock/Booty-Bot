import { Command } from 'discord-akairo'
import type { Message } from 'discord.js'

interface Args {
  numOne: number
  numTwo: number
}

class productCommand extends Command {
  public constructor() {
    super('product', {
      aliases: ['product', 'jcbsmissmart'],
      args: [
        {
          id: 'numOne',
          type: 'number',
          prompt: {
            start: 'Please include 2 numbers in your message.',
            retry: 'Please include 2 numbers in your message.',
          },
        },
        {
          id: 'numTwo',
          type: 'number',
          prompt: {
            start: 'Please include 2 numbers in your message.',
            retry: 'Please include 2 numbers in your message.',
          },
        },
      ],
    })
  }
  public exec(message: Message, args: Args) {
    const product = args.numOne * args.numTwo
    return message.channel.send(`<@227848397447626752> ${product}`)
  }
}

module.exports = productCommand
