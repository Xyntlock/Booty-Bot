import { Command } from 'discord-akairo'
import type { Message } from 'discord.js'
import Config from '../config'

class embedCommand extends Command {
  public constructor() {
    super('embed', {
      aliases: ['embed', 'jcbsmhasgreathair', 'serverinfo'],
    })
  }

  public async exec(message: Message) {
    let owner = this.client.ownerID
    if (typeof owner !== 'string') owner = owner[0]

    const embed = {
      color: Config.color.yellow,
      title: 'Server Info',
      fields: [
        {
          name: 'Server Name',
          value: message.guild?.name,
          inline: true,
        },
        {
          name: 'Member Count',
          value: message.guild?.memberCount,
          inline: true,
        },
        {
          name: 'Bossman',
          value: message.guild?.owner,
          inline: true,
        },
        {
          name: 'Boosts',
          value: message.guild?.premiumSubscriptionCount,
          inline: true,
        },
      ],
      footer: {
        text: 'Brought to you by Booty',
        icon_url: (await this.client.users.fetch(owner)).displayAvatarURL(),
      },
    }
    message.channel.send({
      embed: embed,
    })
  }
}

module.exports = embedCommand
