const { Command } = require('discord-akairo');
const { color } = require('../config');

class userInfoCommand extends Command {
  constructor() {
    super('userinfo', {
      aliases: ['userinfo']
    });
  }

  exec(message) {
    let ban;
    message.member.bannable ? ban = 'Yes' : ban = 'No';

    let nick;
    message.member.nickname ? nick = message.member.nickname : nick = 'None';

    const info = {
      color: color.yellow,
      title: short.tag,
      thumbnail: {
        url: short.avatarURL(),
      },
      fields: [
        {
          name: 'User ID',
          value: message.author.id,
          inline: true
        },
        {
          name: 'Nickname',
          value: nick,
          inline: true
        },
        {
          name: 'Can you ban them?',
          value: ban,
          inline: true
        },
        {
          name: 'Joined',
          value: message.member.joinedAt,
          inline: true
        }
      ],
      footer: {
        text: 'Brought to you by Booty',
        icon_url: 'https://pbs.twimg.com/profile_images/967080985450962944/BVy8-iVx_400x400.jpg'
      }
    };

  message.channel.send({
    embed: info
    });
  };
};

module.exports = userInfoCommand;
