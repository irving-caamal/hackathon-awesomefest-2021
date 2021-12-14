const config = require('../config')


module.exports = {
    name:"interactionCreate",
    on:true,
    async execute(interaction,client,member){

        if(interaction.isButton()){
            if(interaction.customId == 'interesado'){
                let userId = interaction.user.id;
                let guild = client.guilds.cache.get("920091691896143932");
                let member = await guild.members.fetch(userId);
                console.log(member._roles);
                console.log({roleslist: guild.roles})
                let roles = guild.roles.cache.filter(r => member._roles.includes(r.id));
                console.log({findroles: roles})
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