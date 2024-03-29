import { Command } from 'discord-akairo'
import type { Message, GuildMember } from 'discord.js'
import Config from '../config'

interface Args {
  username: GuildMember
}

class userInfoCommand extends Command {
  public constructor() {
    super('userinfo', {
      aliases: ['userinfo'],
      args: [
        {
          id: 'username',
          type: 'member',
          default: (message: Message) => message.member,
        },
      ],
    })
  }

  public async exec(message: Message, args: Args) {
    let owner = this.client.ownerID
    if (typeof owner !== 'string') owner = owner[0]

    let ban
    args.username.bannable ? (ban = 'Yes') : (ban = 'No')

    let nick
    args.username.nickname ? (nick = args.username.nickname) : (nick = 'None')

    let url = args.username.user.avatarURL()
    if (!url) url = ''

    const info = {
      color: Config.color.yellow,
      title: args.username.user.tag,
      thumbnail: {
        url: url,
      },
      fields: [
        {
          name: 'User ID',
          value: args.username.id,
          inline: true,
        },
        {
          name: 'Nickname',
          value: nick,
          inline: true,
        },
        {
          name: 'Can you ban them?',
          value: ban,
          inline: true,
        },
        {
          name: 'Joined',
          value: args.username.joinedAt,
          inline: true,
        },
      ],
      footer: {
        text: 'Brought to you by Booty',
        icon_url: (await this.client.users.fetch(owner)).displayAvatarURL(),
      },
    }

    message.channel.send({
      embed: info,
    })
  }
}

module.exports = userInfoCommand
