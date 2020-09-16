const { Command } = require('discord-akairo');

class coinFlipCommand extends Command {
  constructor() {
    super('coinflip', {
      aliases: ['coinflip', 'flip', 'jcbsmsmellsnice']
    });
  }
  exec(message) {
    const number = Math.floor(Math.random() *2);
    let response;

    if (number === 1) {
      response = 'Heads';
    }
    else {
      response = 'Tails';
    }
    message.channel.send(response);
  }
}

module.exports = coinFlipCommand;
