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
        }
      ]
    };
    message.channel.send({
      embed: embed
    });
  };

};

module.exports = embedCommand;
