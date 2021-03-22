const { Listener } = require('discord-akairo');

class leaveListener extends Listener {
    constructor(){
        super('leaveListener', {
            emitter: 'client',
            event: 'guildMemberRemove'
        });
    }

    exec(member) {
        console.log(`Yup`);
        
        let prism = member.guild.channels.cache.get(`447702094430863360`);
        prism.send(`<@227848397447626752>, ${member.user.tag} (${member.displayName}) just left your server. What has craig done now?`);
        console.log(`Test ${member.user}`);
    }
}

module.exports = leaveListener

