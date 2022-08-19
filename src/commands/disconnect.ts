import { Command } from 'discord-akairo'
import type { Message, GuildMember } from 'discord.js'

type Arg = {
  name: GuildMember
}

export class disconnectCommand extends Command {
  constructor() {
    super('disconnect', {
      aliases: ['disconnect'],
      args: [
        {
          id: 'name',
          type: 'member',
          default: (message: Message) => message.member,
        },
      ],
    })
  }

  exec(message: Message, args: Arg) {
    let voiceChat = args.name.voice.channel
    console.log(voiceChat)
    if (args.name.permissions.has('MOVE_MEMBERS')) {
      args.name.voice.setChannel(null)
    } else {
      message.channel.send(`You don't have the permissions for this!`)
    }
  }
}

module.exports = disconnectCommand
