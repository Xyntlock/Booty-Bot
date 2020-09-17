const { Command } = require('discord-akairo');

class dmCommand extends Command {
  constructor() {
    super('dm', {
      aliases: ['dm'],
      args: [
        {
          id: 'username',
          type: 'member',
          default: message => message.member
        },
        {
        id: 'words',
        type: 'string',
        match: 'rest'
       }
      ]
    });
  }

  exec(message, args) {
    console.log(args.username);
    console.log(args.words);
    args.username.user.send(`${message.member} says ${args.words}`);
    message.channel.send('DM sent!');
  }
}

module.exports = dmCommand;
