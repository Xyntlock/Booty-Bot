const { color } = require('../config');
const { Command } = require ('discord-akairo');

class bagelCommand extends Command {
  constructor() {
    super('bagelcomm', {
      regex: /bagel/i
    });
  }

  exec(message, args) {
    try {
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
    }catch(error){
      console.log(error);
    }

  };

};

module.exports = bagelCommand;
