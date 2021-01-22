const { Command } = require('discord-akairo');
const { color } = require('../config');

class destructCommand extends Command {
    constructor() {
        super('selfdestruct', {
            aliases: ['selfdestruct']
        });
    }

    exec(message) {
        const destructEmbed = {
            color: color.yellow,
            title: 'Self Destruct',
            fields: [
                {
                    name: 'Self Destruct Time',
                    value: `${message.member} will self destruct in 5 seconds!`
                }
            ],
            footer: {
                text: `Your greatest mistake. | Brought to you by Booty`,
                icon_url: 'https://pbs.twimg.com/profile_images/967080985450962944/BVy8-iVx_400x400.jpg'
            }
        };

        message.channel.send({
            embed: destructEmbed
        });

        function sleep(duration) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, duration * 1000)
            })
        }

        async function destructUser() {
            await sleep(5);
            let role = message.guild.roles.cache.find(r => r.name === "Self Destructed");
             message.member.roles.add(role);
        }
        
        destructUser();
    }
}

module.exports = destructCommand;