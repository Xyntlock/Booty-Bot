const { Command } = require('discord-akairo');

class disconnectCommand extends Command {
  constructor(){
    super('disconnect', {
      aliases: ['disconnect'],
      args: [
        {
          id: 'name',
          type: 'member',
          default: message => message.member
        }
      ]
    });
  }

  exec(message, args) {
    let voiceChat = args.name.voice.channel;
    console.log(voiceChat);
    if (args.name.permissions.has('MOVE_MEMBERS')) {
      args.name.voice.setChannel(null);
    }
    else {
      message.channel.send(`You don't have the permissions for this!`);
    }
  }
}

module.exports = disconnectCommand;
