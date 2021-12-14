const config = require('../config')


module.exports = {
    name:"interactionCreate",
    on:true,
    async execute(interaction,client){

        if(interaction.isButton()){
            if(interaction.customId == 'interesado'){
                
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