const { Command } = require('discord-akairo');
const { color } = require('../config');

class embedCommand extends Command {
  constructor() {
    super('embed', {
      aliases: ['embed', 'jcbsmhasgreathair', 'serverinfo']
    });
  }

  exec(message) {
    const embed = {
      color: color.yellow,
      title: 'Server Info',
      fields: [
        {
          name: 'Server Name',
          value: message.guild.name,
          inline: true
        },
        {
          name: 'Member Count',
          value: message.guild.memberCount,
          inline: true
        },
        {
          name: 'Bossman',
          value: message.guild.owner,
          inline: true
        },
        {
          name: 'Server Region',
          value: message.guild.region,
          inline: true
        },
        {
          name: 'Boosts',
          value: message.guild.premiumSubscriptionCount,
          inline: true
        }
      ],
      footer: {
        text: 'Brought to you by Booty',
        icon_url: 'https://pbs.twimg.com/profile_images/967080985450962944/BVy8-iVx_400x400.jpg'
      }
    };
    message.channel.send({
      embed: embed
    });
  };

};

module.exports = embedCommand;
