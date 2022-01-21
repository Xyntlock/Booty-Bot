const { Listener } = require('discord-akairo');

class leaveListener extends Listener {
    constructor(){
        super('leaveListener', {
            emitter: 'client',
            event: 'guildMemberRemove'
        });
    }

    async exec(member) {
        let responses = ['Seems they peeweed too close to the sun', 'Fuck', 'Bye have a great time', 'Another one bites the dust', 'Got kicked out of mosh', 'Spunky toes', 'Kassim ate them',
    'Fucking died', 'Got arrested', 'Booteh shat on them', 'Ragequit', 'Nae nae\'d their way out the server', 'Whipped too hard', 'Crashed their car', 'Just left, innit', 'PRISM is just too naughty',
    'PRISM got too silly', 'Bring back #economy', '*Moans*'];

    let index = Math.floor(Math.random() * responses.length);

        console.log(`Yup`);
        
        let prism = member.guild.channels.cache.get(`447702094430863360`);
        prism.send(`<@227848397447626752>, ${member.user.tag} (${member.displayName}) just left your server. ${responses[index]}.
        ID of the fallen: \`${member.user.id}\``);
        console.log(`Test ${member.user}`);
    }
}

module.exports = leaveListener

