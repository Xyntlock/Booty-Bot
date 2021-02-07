const { Command } = require('discord-akairo');
const { color } = require('../config');

class destructCommand extends Command {
    constructor() {
        super('selfdestruct', {
            aliases: ['selfdestruct'],
            args: [
                {
                    id: 'name',
                    type: 'member',
                    default: message => message.member
                }
            ]
        });
    }

    exec(message, args) {
        console.log(args.name);
        if(args.name.id !== message.member.id) {
            if(message.member.permissions.has('ADMINISTRATOR')) {
                console.log(`Ok!`);
            }
            else {
                message.channel.send(`You don't have the permissions for this!`);
                return;
            }
        }
        
        const destructEmbed = {
            color: color.yellow,
            title: 'Self Destruct',
            fields: [
                {
                    name: 'Self Destruct Time',
                    value: `${args.name} will self destruct in 5 seconds!`
                }
            ],
            footer: {
                text: `Your greatest mistake. | Brought to you by Booty`,
                icon_url: 'https://pbs.twimg.com/profile_images/967080985450962944/BVy8-iVx_400x400.jpg'
            }
        };

        const freeEmbed = {
            color: color.yellow,
            title: 'Welcome :)',
            fields: [
                {
                    name: 'Freedom',
                    value: `To free yourself, you must guess the correct 2-digit code, which is changed every hour.`
                }
            ],
            footer: {
                text: `Good Luck! | Brought to you by Booty`,
                icon_url: 'https://pbs.twimg.com/profile_images/967080985450962944/BVy8-iVx_400x400.jpg'
            }
        };

        message.channel.send({
            embed: destructEmbed
        });

        let destructChannel = message.guild.channels.cache.get(`802232326050414633`);


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
             args.name.roles.add(role);
            destructChannel.send({
                embed: freeEmbed
            });
        }
        
        destructUser();
    }
}

module.exports = destructCommand;