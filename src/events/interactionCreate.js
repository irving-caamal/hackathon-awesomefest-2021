const config = require('../config')
const {fetchJobs} = require('../services/searchJobs')
const { removeEmojis } = require('../utils/stringUtils')
const Discord  = require("discord.js");
module.exports = {
    name:"interactionCreate",
    on:true,
    async execute(interaction,client,member){

        if(interaction.isButton()){
            if(interaction.customId == 'interesado'){
                let userId = interaction.user.id;
                let guild = client.guilds.cache.get("920091691896143932");
                let member = await guild.members.fetch(userId);
                let roles = guild.roles.cache.filter(r => member._roles.includes(r.id));
                let embeds = [];
                let findedJobsByRole = roles.map(async (role) => {
                    let roleName = `${removeEmojis(role.name)}`
                    if(roleName !== 'Server Booster') {
                        const jobresults = await fetchJobs(roleName.toLocaleLowerCase());
                        if(!jobresults.length > 0) {return}
                        let newembed = new Discord.MessageEmbed()
                                        .setTitle("Hi")
                                        .setColor(0x008000)
                                        .setDescription(`Aqui tienes las ultimas ofertas basadas en el rol ${role.name}\n`);
                        embeds = [...embeds, newembed]
                        return embeds = [...embeds,...jobresults]
                    }
                    return;
                })
                // Resolve all promises
                return Promise.all(findedJobsByRole).then(() => {
                    if(!embeds.length) {
                        return interaction.reply('No hay ofertas para tu rol');
                    }
                    return interaction.reply({embeds: embeds});
                })
            }
            if(interaction.customId == 'no'){
                interaction.reply("No te preocupes 😅, cuando gustes avísame con el comando `/search` cuando necesites algún empleo relacionado con tu ROL.");
            }
        }

        if(!interaction.isCommand()) return;
        const command = client.commands.get(interaction.commandName);
        if(!command) return;

        try{
            await command.execute(interaction);
        }catch(error){
            console.error(error);
            await interaction.reply({content: "There was an error while executing this command!!", ephemeral:true});
        }

    },
}