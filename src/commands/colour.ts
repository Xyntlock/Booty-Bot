import { Command } from 'discord-akairo'
import Color from 'color'
import convert from 'color-convert'
import { capitalise } from '../functions'
import type { Message } from 'discord.js'

interface Args {
  numOne: string
}

class colourCommand extends Command {
  public constructor() {
    super('colour', {
      aliases: ['colour', 'color'],
      args: [
        {
          id: 'numOne',
          type: 'string',
          default: 'random',
          match: 'rest',
        },
      ],
    })
  }

  public async exec(message: Message, args: Args) {
    console.log(args.numOne)
    args.numOne = args.numOne.toLowerCase()

    // get xyntlock avatar
    let owner = this.client.ownerID
    if (typeof owner !== 'string') owner = owner[0]

    // get random num 0-255
    function getColor() {
      return Math.floor(Math.random() * 256)
    }

    if (args.numOne === 'random') {
      const ranColor = Color.rgb(getColor(), getColor(), getColor())
      const ranHex = ranColor.hex()
      const ranRGB = ranColor.rgb().array()
      console.log(ranHex)

      let string = ranHex.toString()
      console.log(string)
      string = string.substring(1)
      console.log(string)

      const colorEmbed = {
        color: ranHex,
        title: 'Random Colour',
        fields: [
          {
            name: 'Hex Value',
            value: ranHex,
            inline: true,
          },
          {
            name: 'RGB Values',
            value: ranRGB,
            inline: true,
          },
        ],
        image: {
          url: `http://www.htmlcsscolor.com/preview/gallery/${string}.png`,
        },
        footer: {
          text: 'Brought to you by Booty',
          icon_url: (await this.client.users.fetch(owner)).displayAvatarURL(),
        },
      }
      message.channel.send({
        embed: colorEmbed,
      })
    } else {
      let words = args.numOne.split(' ')
      let newColor
      console.log(words.length)
      if (words[0] !== 'dark' && words[0] !== 'light' && words.length > 1) {
        message.channel.send('Please provide me with a colour.')
        return
      }
      try {
        newColor = Color.rgb(words[words.length - 1])
      } catch (e) {
        message.channel.send('Please provide me with a colour.')
      }

      if (!newColor) return

      if (words[0] === 'light') {
        newColor = newColor.lighten(0.25)
      }
      if (words[0] === 'dark') {
        newColor = newColor.darken(0.5)
      }

      console.log(newColor)
      const colorHex = newColor.hex()

      let string = colorHex.toString()
      console.log(string)
      string = string.substring(1)
      console.log(string)

      let embedRGB = newColor.array()
      for (let i = 0; i < embedRGB.length; i++) {
        embedRGB[i] = Math.round(embedRGB[i])
        if (embedRGB[i] > 255) {
          embedRGB[i] = 255
        }
      }

      const colorEmbed = {
        color: colorHex,
        title: capitalise(args.numOne),
        fields: [
          {
            name: 'Hex Value',
            value: colorHex,
            inline: true,
          },
          {
            name: 'RGB Values',
            value: embedRGB,
            inline: true,
          },
        ],
        image: {
          url: `http://www.htmlcsscolor.com/preview/gallery/${string}.png`,
        },
        footer: {
          text: 'Brought to you by Booty',
          icon_url: (await this.client.users.fetch(owner)).displayAvatarURL(),
        },
      }

      message.channel.send({
        embed: colorEmbed,
      })
    }
  }
}

module.exports = colourCommand
