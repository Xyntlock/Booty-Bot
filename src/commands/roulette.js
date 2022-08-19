const { Command } = require('discord-akairo')
const { sleep } = require('../functions')

class rouletteCommand extends Command {
  constructor() {
    super('roulette', {
      aliases: ['roulette'],
    })
  }

  async exec(message) {
    let client = this.client

    let chamber = [0, 1, 2, 3, 4, 5]
    chamber.sort(() => Math.random() - 0.5)
    let reply = chamber[0]
    console.log(reply)
    let check = 1
    let left = 5

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
        icon_url: (
          await this.client.users.fetch(this.client.ownerID)
        ).displayAvatarURL(),
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
        icon_url: (
          await this.client.users.fetch(this.client.ownerID)
        ).displayAvatarURL(),
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
            await client.users.fetch(client.ownerID)
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
        let role = message.guild.roles.cache.find(
          r => r.name === 'Self Destructed'
        )
        message.channel.messages.fetch({ limit: 1 }).then(messages => {
          let lastMessage = messages.first()

          lastMessage.member.roles.add(role)
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

    const filter = message =>
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
