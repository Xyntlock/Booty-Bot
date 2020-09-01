const { Command } = require('discord-akairo');
const { color } = require('../config');

class timeCommand extends Command {
  constructor() {
    super('time', {
      aliases: ['time', 'jcbsmistall']
    })
  }
  exec(message) {

    var d= new Date();

    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();

    function getLength(number) {
      return number.toString().length;
    };

    if (getLength(month) <2) {
      month = (`0${month}`);
    };
    if (getLength(day) <2) {
      day = (`0${day}`);
    };
    if (getLength(minute) <2) {
      minute = (`0${minute}`);
    };
    if getLength(hour) <2 {
      hour = (`0${hour}`);
    };

    let dateFormat = (`${day}/${month}/${year}`);
    let timeFormat = (`${hour}:${minute}`);

    const timeEmbed = {

      color: color.yellow,
      title: 'Current Time',
      fields: [
        {
          name: 'Time',
          value: timeFormat
        },
        {
          name: 'DD/MM/YYYY',
          value: dateFormat
        }
      ]
    };

    message.channel.send({
      embed: timeEmbed
    });

  }
};

module.exports = timeCommand;
