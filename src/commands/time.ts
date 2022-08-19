import { Command } from 'discord-akairo'
import type { Message } from 'discord.js'
import Config from '../config'

class timeCommand extends Command {
  public constructor() {
    super('time', {
      aliases: ['time', 'jcbsmistall'],
    })
  }
  public exec(message: Message) {
    const d = new Date()

    let year = d.getFullYear().toString()
    let month = (d.getMonth() + 1).toString()
    let day = d.getDate().toString()
    let hour = d.getHours().toString()
    let minute = d.getMinutes().toString()

    function getLength(number: string) {
      return number.length
    }

    if (getLength(month) < 2) {
      month = `0${month}`
    }
    if (getLength(day) < 2) {
      day = `0${day}`
    }
    if (getLength(minute) < 2) {
      minute = `0${minute}`
    }
    if (getLength(hour) < 2) {
      hour = `0${hour}`
    }

    let dateFormat = `${day}/${month}/${year}`
    let timeFormat = `${hour}:${minute}`

    const timeEmbed = {
      color: Config.color.yellow,
      title: 'Current Time',
      fields: [
        {
          name: 'Time',
          value: timeFormat,
        },
        {
          name: 'DD/MM/YYYY',
          value: dateFormat,
        },
      ],
    }

    message.channel.send({
      embed: timeEmbed,
    })
  }
}

module.exports = timeCommand
