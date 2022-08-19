import { Listener } from 'discord-akairo'
import type { GuildMember, TextChannel } from 'discord.js'

class leaveListener extends Listener {
  public constructor() {
    super('leaveListener', {
      emitter: 'client',
      event: 'guildMemberRemove',
    })
  }

  public async exec(member: GuildMember) {
    let responses = [
      'Seems they peeweed too close to the sun',
      'Fuck',
      'Bye have a great time',
      'Another one bites the dust',
      'Kid got kicked out of mosh',
      'Spunky toes',
      'Kassim ate them',
      'They simple fucking died',
      'Man got arrested styll',
      'Booteh shat on them',
      'Ragequit',
      "They nae nae'd their way out the server",
      'Whipped too hard',
      'Megan crashed their car',
      'They just left, innit',
      'PRISM is just too naughty',
      'PRISM got too silly',
      'Bring back #economy',
      '*Moans*',
    ]

    let index = Math.floor(Math.random() * responses.length)

    console.log(`Yup`)

    let prism = member.guild?.channels.cache.get(`447702094430863360`)
    ;(prism as TextChannel)
      .send(`<@227848397447626752>, ${member.user.tag} (${member.displayName}) just left your server. ${responses[index]}.
        ID of the fallen: \`${member.user.id}\``)
    console.log(`Test ${member.user}`)
  }
}

module.exports = leaveListener
