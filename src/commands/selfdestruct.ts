import { Command } from 'discord-akairo'
import { sleep } from '../functions'
import { Message, GuildMember, TextChannel } from 'discord.js'

interface Args {
  name: GuildMember
}

class destructCommand extends Command {
  public constructor() {
    super('selfdestruct', {
      aliases: ['selfdestruct'],
      args: [
        {
          id: 'name',
          type: 'member',
          default: (message: Message) => message.member,
        },
      ],
    })
  }

  public async exec(message: Message, args: Args) {
    let owner = this.client.ownerID
    if (typeof owner !== 'string') owner = owner[0]

    console.log(args.name)
    if (args.name.id !== message.member?.id) {
      if (message.member?.permissions.has('ADMINISTRATOR')) {
        console.log(`Ok!`)
      } else {
        message.channel.send(`You don't have the permissions for this!`)
        return
      }
    }

    const destructEmbed = {
      color: process.env.COLOR_YELLOW,
      title: 'Self Destruct',
      fields: [
        {
          name: 'Self Destruct Time',
          value: `${args.name} will self destruct in 5 seconds!`,
        },
      ],
      footer: {
        text: `Your greatest mistake. | Brought to you by Booty`,
        icon_url: (await this.client.users.fetch(owner)).displayAvatarURL(),
      },
    }

    const freeEmbed = {
      color: process.env.COLOR_YELLOW,
      title: 'Welcome :)',
      fields: [
        {
          name: 'Freedom',
          value: `To free yourself, you must guess the correct 2-digit code, which is changed every hour.`,
        },
      ],
      footer: {
        text: `Good Luck! | Brought to you by Booty`,
        icon_url: (await this.client.users.fetch(owner)).displayAvatarURL(),
      },
    }

    message.channel.send({
      embed: destructEmbed,
    })

    let destructChannel =
      message.guild?.channels.cache.get(`802232326050414633`)

    async function destructUser() {
      await sleep(5)
      let role = message.guild?.roles.cache.find(
        r => r.name === 'Self Destructed'
      )
      if (role) args.name.roles.add(role)
      ;(destructChannel as TextChannel)?.send({
        embed: freeEmbed,
      })
    }

    destructUser()
  }
}

module.exports = destructCommand
