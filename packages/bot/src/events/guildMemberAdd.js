const config = require('../config')
const Discord  = require("discord.js");
const { memberCounter } = require("../counters/member-counter");

module.exports = {
    name:"guildMemberAdd",
    on:true,
    async execute(member,client){
        const channel_welcome = member.guild.channels.cache.get("920188931935457290");

        if(!channel_welcome) return;

        const newMemberEmbed = new Discord.MessageEmbed()
            .setColor("d81e5b")
            .setTitle("Nuevo miembro!!")
            .setDescription(`Hola hola ${member.user}!!! Esperamos que disfrutes este server, Gracias a ti, ya somos ${member.guild.memberCount} :scream: en esta comunidad, estamos felices de tenerte aqui ❤️. 
            Te invitamos a leer nuestra normativa en ✅ #rules, presentarte en 👋intros, auto-asignarte tus roles en 🔖 #roles y a interactuar en los distintos canales que tenemos🙌 asi como tambien poder registrarte de manera gratuita en nuestra plataforma.
             ¡Siéntete libre de conectar, aprender y dejar tus mejores memes😄⚡️!

            `)
            .setThumbnail(member.user.avatarURL)
            .setTimestamp();

            member.guild.channels.cache.get("920188931935457290").send({
                embeds:[newMemberEmbed]
            })



    },
}