import { Command } from 'discord-akairo'
import { sleep } from '../functions'
import type { Message } from 'discord.js'

class rouletteCommand extends Command {
  public constructor() {
    super('roulette', {
      aliases: ['roulette'],
    })
  }

  public async exec(message: Message) {
    let client = this.client

    let chamber = [0, 1, 2, 3, 4, 5]
    chamber.sort(() => Math.random() - 0.5)
    let reply: number | undefined = chamber[0]
    console.log(reply)
    let check = 1
    let left = 5

    // get xyntlock avatar
    let owner = this.client.ownerID
    if (typeof owner !== 'string') owner = owner[0]

    const deadEmbed = {
      color: process.env.COLOR_YELLOW,
      title: 'Russian Roulette',
      fields: [
        {
          name: 'BANG. You have died.',
          value: 'Type .roulette to play again',
        },
      ],
      footer: {
        text: 'Brought to you by Booty',
        icon_url: (await this.client.users.fetch(owner)).displayAvatarURL(),
      },
    }

    const winEmbed = {
      color: process.env.COLOR_YELLOW,
      title: 'Russian Roulette',
      fields: [
        {
          name: 'You have survived a round of Russian Roulette! Nobody dies today.',
          value: 'Type .roulette to play again.',
        },
      ],
      footer: {
        text: `Brought to you by Booty`,
        icon_url: (await this.client.users.fetch(owner)).displayAvatarURL(),
      },
    }

    async function roulette() {
      reply = chamber[0]
      console.log(`check = ${check}`)

      const survivalEmbed = {
        color: process.env.COLOR_YELLOW,
        title: 'Russian Roulette',
        fields: [
          {
            name: 'CLICK. You live on for another turn.',
            value: 'Type .trigger to continue.',
          },
        ],
        footer: {
          text: `Chambers left: ${left} | Brought to you by Booty`,
          icon_url: (
            await client.users.fetch(
              typeof owner === 'string' ? owner : owner[0]
            )
          ).displayAvatarURL(),
        },
      }

      if (check === 5 && reply !== 5) {
        message.channel.send({
          embed: winEmbed,
        })
        collector.stop()
        return
      }

      if (reply === 5) {
        let role = message.guild?.roles.cache.find(
          r => r.name === 'Self Destructed'
        )

        message.channel.messages.fetch({ limit: 1 }).then(messages => {
          let lastMessage = messages.first()

          if (role) lastMessage?.member?.roles.add(role)
        })

        message.channel.send({
          embed: deadEmbed,
        })

        if (check !== 1) {
          collector.stop()
        }
        return
      } else {
        reply = chamber.shift()
        console.log(chamber)
        message.channel.send({
          embed: survivalEmbed,
        })
      }
    }

    roulette()

    const filter = (message: Message) =>
      message.content.startsWith('.trigger') ||
      message.content.startsWith(`${this.handler.prefix}roulette`)
    const collector = message.channel.createMessageCollector(filter, {
      time: 60000,
    })

    collector.on('collect', m => {
      console.log(m)
      if (m.content.startsWith([`${this.handler.prefix}roulette`])) {
        collector.stop()
      } else {
        ++check
        --left
        console.log('collected')
        roulette()
      }
    })
  }
}

module.exports = rouletteCommand
