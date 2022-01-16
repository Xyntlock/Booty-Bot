const { Listener } = require('discord-akairo');

class leaveListener extends Listener {
    constructor(){
        super('leaveListener', {
            emitter: 'client',
            event: 'guildMemberRemove'
        });
    }

    async exec(member) {
        console.log(`Yup`);
        
        let prism = member.guild.channels.cache.get(`447702094430863360`);
        prism.send(`<@227848397447626752>, ${member.user.tag} (${member.displayName}) just left your server. Seems they peeweed too close to the sun.
        ID of the fallen: \`${member.user.id}\``);
        console.log(`Test ${member.user}`);
    }
}

module.exports = leaveListener

