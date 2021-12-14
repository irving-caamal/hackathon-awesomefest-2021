const config = require('../config')
const Discord  = require("discord.js");

module.exports = {
    name:"guildMemberAdd",
    on:true,
    async execute(member){
        //console.log("New Member",member)
        //member.guild.channels.cache.get("920188931935457290").send(`${member.user.username} has joined the server`);
        const channel_welcome = member.guild.channels.cache.get("920188931935457290");

        if(!channel_welcome) return;

        const newMemberEmbed = new Discord.MessageEmbed()
            .setColor("d81e5b")
            .setTitle("Nuevo miembro!!")
            .setDescription(`Hola hola ${member.user}!!! Esperamos que disfrutes este server, Gracias a ti, ya somos numero de usuarios en esta comunidad, estamos felices de tenerte aqui ❤️. 
            `)
            .setThumbnail(member.user.avatarURL)
            .setTimestamp();

            member.guild.channels.cache.get("920188931935457290").send({
                embeds:[newMemberEmbed]
            })



    },
}