const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { ROUTES, Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('./config')

const commands = [];
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}
//console.log({config: config});
const rest = new REST({version:'9'}).setToken(config.DISCORD_TOKEN);

(async () =>{
    try{
       await rest.put(Routes.applicationGuildCommands(config.clientId,config.guildId),
        { body: commands },
        );
        console.log('successfully register application commands');
    }
    catch(error){
        console.error(error);
    }
})();
