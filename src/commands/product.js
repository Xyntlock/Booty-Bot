const {  Command } = require('discord-akairo');

class productCommand extends Command {
  constructor() {
    super('product', {
      aliases: ['product', 'jcbsmissmart'],
      args: [
        {
          id: 'numOne',
          type: 'number',
          prompt: {
            start: 'Please include 2 numbers in your message.',
            retry: 'Please include 2 numbers in your message.'
          }
        },
        {
          id: 'numTwo',
          type: 'number',
          prompt: {
            start: 'Please include 2 numbers in your message.',
            retry: 'Please include 2 numbers in your message.'
          }
        }
      ]
    });
  }
  exec(message, args) {
    const product = args.numOne * args.numTwo;
    return message.channel.send(`<@227848397447626752> ${product}`);
  }
};

module.exports = productCommand;
