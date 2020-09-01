const { Command } = require('discord-akairo');
const { color } = require('../config');

class userInfoCommand extends Command {
  constructor() {
    super('userinfo', {
      aliases: ['userinfo'],
      args: [
        {
          id: 'username',
          type: 'member',
          default: message => message.member
        }
      ]
    });
  }

  exec(message, args) {
    let ban;
    args.username.bannable ? ban = 'Yes' : ban = 'No';

    let nick;
    args.username.nickname ? nick = args.username.nickname : nick = 'None';

    const info = {
      color: color.yellow,
      title: args.username.user.tag,
      thumbnail: {
        url: args.username.user.avatarURL(),
      },
      fields: [
        {
          name: 'User ID',
          value: args.username.id,
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
          value: args.username.joinedAt,
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
