import { Command } from 'discord-akairo'
import { Message, GuildMember } from 'discord.js'

type Args = {
  username: GuildMember
  words: string
}

class dmCommand extends Command {
  constructor() {
    super('dm', {
      aliases: ['dm'],
      args: [
        {
          id: 'username',
          type: 'member',
          default: (message: Message) => message.member,
        },
        {
          id: 'words',
          type: 'string',
          match: 'rest',
        },
      ],
    })
  }

  exec(message: Message, args: Args) {
    console.log(args.username)
    console.log(args.words)
    args.username.user.send(`${message.member} says ${args.words}`)
    message.channel.send('DM sent!')
  }
}

module.exports = dmCommand
