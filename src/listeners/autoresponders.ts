import { Listener } from 'discord-akairo'
import config from '../config'
import type { Message } from 'discord.js'

class pingListener extends Listener {
  public constructor() {
    super('autoresponder', {
      emitter: 'client',
      event: 'message',
    })
  }

  public exec(message: Message) {
    if (
      this.client.user?.id &&
      message.mentions.users.has(this.client.user?.id)
    )
      message.channel.send('<:pingsock:731609128941912096>')

    if (/bagel/i.test(message.content)) {
      const bagelembed = {
        color: config.color.yellow,
        title: 'Om nom nom...bagels',
        image: {
          url: 'https://cdn.discordapp.com/attachments/519267758039629824/772118751566626846/bgels_1.jpg',
          height: 11,
          width: 10,
        },
      }
      message.channel.send({
        embed: bagelembed,
      })
    }
  }
}

module.exports = pingListener
