const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { ROUTES, Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { DISCORD_TOKEN, CLIENT_ID, GUILD_ID } = require('./config');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({version:'9'}).setToken(DISCORD_TOKEN);

(async () =>{
    try{
       await rest.put(Routes.applicationCommands(CLIENT_ID,GUILD_ID),
        { body: commands },
        );
        console.log('successfully register application commands');
    }
    catch(error){
        console.error(error);
    }
})();
