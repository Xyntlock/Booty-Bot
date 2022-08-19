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

  async exec(message, args) {    
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
        icon_url: (await this.client.users.fetch(this.client.ownerID)).displayAvatarURL()
      }
    };

  message.channel.send({
    embed: info
    });
  };
};

module.exports = userInfoCommand;
