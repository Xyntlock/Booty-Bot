const { Listener } = require('discord-akairo');
const { color } = require('../config');

class pingListener extends Listener {
  constructor(){
    super('autoresponder', {
      emitter: 'client',
      event: 'message'
    });
  }

  exec(message) {
    message.mentions.users.has(this.client.user.id) ? message.channel.send('<:pingsock:731609128941912096>') : '';

    if (/bagel/i.test(message.content)) {
      const bagelembed = {
        color: color.yellow,
        title: 'Om nom nom...bagels',
        image: {
          url:'https://kirbiecravings.com/wp-content/uploads/2018/01/2-ingredient-bagels-14a1-700x692.jpg'
        }
      }
      message.channel.send({
        embed: bagelembed
      });
    }

    if (message.author.id === '628232571003863041') {
      console.log('id registered');
      message.author.send('Fuck you');
    }

  }
}

module.exports = pingListener;
