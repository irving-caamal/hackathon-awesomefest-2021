const Discord  = require("discord.js");
const { Collection } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('reactions')
        .setDescription('Reacts with emojis for countries'),
    async execute(client){
        const channel = '920172355987324939';

        let argentina = channel.guild.roles.cache.get("920348906892689408")
        let brasil = channel.guild.roles.cache.get("920349775637925888")
        let bolivia = channel.guild.roles.cache.get("920349824606433320")
        // let fullstack = channel.guild.roles.cache.get("920165563827892234")
        // let mobile = channel.guild.roles.cache.get("920165640306823168")
        // let datascience = channel.guild.roles.cache.get("920165744891793418")
        // let devops = channel.guild.roles.cache.get("920165846779842601")
        // let ai = channel.guild.roles.cache.get("920165907962167328")
        // let agile = channel.guild.roles.cache.get("920165943357865984")
        // let gaming = channel.guild.roles.cache.get("920166040321794069")
        // let marketing = channel.guild.roles.cache.get("920166107401289748")


        // const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");
        // const blueTeamRole = message.guild.roles.cache.find(role => role.name === "YOUR_ROLE");
 
        const argentinaEmoji = '🇦🇷';
        const brasilEmoji = '🇧🇷';
        const boliviaEmoji = '🇧🇴';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('🌎Roles por país!')
            .setDescription('Escoge de donde eres!!!\n\n'
                + `${argentinaEmoji} Argentina!! \n`
                + `${brasilEmoji} Brasil!! \n`
                + `${boliviaEmoji} Bolivia!! \n`);
        //let msg = await channel.send({embeds: [Embed], components: [menu]})
        let messageEmbed = await channel.send({embeds:[embed]});
        messageEmbed.react(argentinaEmoji);
        messageEmbed.react(brasilEmoji);
        messageEmbed.react(boliviaEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === argentinaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(argentina);
                }
                if (reaction.emoji.name === brasilEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(brasil);
                }
                if (reaction.emoji.name === boliviaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bolivia);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === argentinaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(argentina);
                }
                if (reaction.emoji.name === brasilEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(brasil);
                }
            } else {
                return;
            }
        });
    }
}
