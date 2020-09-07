const { Command } = require('discord-akairo');
const { color } = require('../config');

class keanuCommand extends Command {
  constructor() {
    super('keanu', {
      aliases: ['keanu']
    });
  }

  exec (message) {
    let Keanus = ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg/1200px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%28cropped%29.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg/220px-Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg', 'https://media.newyorker.com/photos/5cf5728d47f7cc877a506d9b/master/pass/Fry-KeanuReeves-2.jpg', 'https://www.cheatsheet.com/wp-content/uploads/2020/09/keanu-reeves-speed-1200x800.jpg', 'https://i.insider.com/5d66d21e6f24eb396b6c8192?width=1100&format=jpeg&auto=webp', 'https://www.cheatsheet.com/wp-content/uploads/2020/08/Keanu-Reeves-5.jpg', 'https://i.insider.com/5d66d21e6f24eb396b6c8192?width=1100&format=jpeg&auto=webp', 'https://img.jakpost.net/c/2019/05/20/2019_05_20_72607_1558317268._large.jpg', 'https://www.cheatsheet.com/wp-content/uploads/2020/09/keanu-reeves-3-1200x851.jpg'];

    Keanus.sort(() => Math.random() - 0.5);
    let reply = Keanus[0];

    const keanuEmbed = {
      color: color.yellow,
      title: 'Keanu',
      image: {
        url: reply
      }
    };

    message.channel.send({
      embed: keanuEmbed
    });
  };
};

module.exports = keanuCommand;
