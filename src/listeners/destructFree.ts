import { Listener } from 'discord-akairo'
import { Message } from 'discord.js'

let keycode1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let keycode2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function setCode() {
  keycode1.sort(() => Math.random() - 0.5)
  keycode2.sort(() => Math.random() - 0.5)
}

setInterval(setCode, 3600000)

class destructListener extends Listener {
  public constructor() {
    super('destructFree', {
      emitter: 'client',
      event: 'message',
    })
  }

  public async exec(message: Message) {
    let code1 = keycode1[0]
    let code2 = keycode2[0]
    let destructChat = await this.client.channels.fetch(`802232326050414633`)

    if (message.channel !== destructChat) {
      return
    }

    console.log(`${code1}${code2}`)
    if (message.content === `${code1}${code2}`) {
      let role = message.guild?.roles.cache.find(
        r => r.name === 'Self Destructed'
      )
      if (role) message.member?.roles.remove(role)
      setCode()
    }
  }
}

module.exports = destructListener
