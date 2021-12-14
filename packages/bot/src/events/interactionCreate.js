const config = require('../config')


module.exports = {
    name:"interactionCreate",
    on:true,
    async execute(interaction,client){

        if(interaction.isButton()){
            if(interaction.customId == 'PROFESIONAL'){
                interaction.reply("you clicked " + interaction.customId+"AQUI VA MENU DE PROFESIONAL");
            }
            if(interaction.customId == 'EMPLEADOR'){
                interaction.reply("you clicked " + interaction.customId+"AQUI VA MENU DE EMPLEADOR");
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