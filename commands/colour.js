const { Command } = require('discord-akairo');
const Color = require('color');

class colourCommand extends Command {
  constructor() {
    super('colour', {
      aliases: ['colour']
    });
  };

  exec(message) {
    function getColor() {
      let colorValue;
      return colorValue = Math.floor(Math.random()*256);
    };
    var ranColor = Color.rgb(getColor(), getColor(), getColor());
    var ranHex = ranColor.hex();
    var ranRGB = ranColor.rgb().array();
    console.log(ranHex);

    let string = ranHex.toString();
    console.log(string);
    string = string.substring(1);
    console.log(string);

    const colorEmbed = {
      color: ranHex,
      title: 'Random Colour',
      fields: [
        {
        name: 'Hex Value',
        value: ranHex,
        inline: true
      },
      {
        name: 'RGB Values',
        value: ranRGB,
        inline: true
      }
    ],
      image: {
        url:`http://www.htmlcsscolor.com/preview/gallery/${string}.png`
      }
    };
    message.channel.send({
      embed: colorEmbed
    });
  };
};

module.exports = colourCommand;
