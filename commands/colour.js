const { Command } = require('discord-akairo');
const Color = require('color');
const convert = require('color-convert');
const { capitalise } = require('../functions')

class colourCommand extends Command {
  constructor() {
    super('colour', {
      aliases: ['colour', 'color'],
      args: [
        {
          id: 'numOne',
          type: 'string',
          default: 'random',
          match: 'rest'
        }
      ]
    });
  };

  exec(message, args) {

    console.log(args.numOne);
    args.numOne = args.numOne.toLowerCase();

    if (args.numOne === 'random') {
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
        },
        footer: {
          text: 'Brought to you by Booty',
          icon_url: 'https://pbs.twimg.com/profile_images/967080985450962944/BVy8-iVx_400x400.jpg'
        }
      };
      message.channel.send({
        embed: colorEmbed
      });
    }
    else {
      let words = args.numOne.split(" ");
      let newColor;
      console.log(words.length);
      try {
        newColor = Color.rgb(words[(words.length-1)]);
      } catch(e) {
        message.channel.send('Please provide me with a colour.');
      };

      if (words[0] === 'light') {
        newColor = newColor.lighten(0.25);
      };
      if (words[0] === 'dark') {
        newColor = newColor.darken(0.5);
      };
      if (words[0] !== 'dark' && words[0] !== 'light' && words.length > 1) {
        message.channel.send('Please provide me with a colour.');
        return
      };

      console.log(newColor);
      var colorHex = newColor.hex();

      let string = colorHex.toString();
      console.log(string);
      string = string.substring(1);
      console.log(string);

      let embedRGB = newColor.array();
      for (let i = 0; i < embedRGB.length; i++) {
        embedRGB[i] = Math.round(embedRGB[i]);
        if (embedRGB[i] > 255) {
          embedRGB[i] = 255;
        };
      };

      const colorEmbed = {
        color: colorHex,
        title: args.numOne[0].toUpperCase() + args.numOne.substring(1),
        fields: [
          {
          name: 'Hex Value',
          value: colorHex,
          inline: true
        },
        {
          name: 'RGB Values',
          value: embedRGB,
          inline: true
        }
      ],
        image: {
          url:`http://www.htmlcsscolor.com/preview/gallery/${string}.png`
        },
        footer: {
          text: 'Brought to you by Booty',
          icon_url: 'https://pbs.twimg.com/profile_images/967080985450962944/BVy8-iVx_400x400.jpg'
        }
      };

      message.channel.send({
        embed: colorEmbed
      });
     }
  };
};

module.exports = colourCommand;
