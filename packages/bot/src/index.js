const config = require('./config')
const Discord  = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const {searchJobs} = require('./services/getOnBoardApi')
const { Collection, Intents } = require("discord.js");

const fs = require('fs');

const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS']
    }
);
const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith(".js"))

const eventFiles = fs.readdirSync('./src/events/').filter(file => file.endsWith(".js"))

for(const file of eventFiles){
    const event = require(`./events/${file}`);
    if(event.once){
        client.once(event.name,(...args) =>event.execute(...args, client));
    }else{
        client.on(event.name,(...args) =>event.execute(...args, client));
    }
}

//curl --location -g --request GET 'https://www.getonbrd.com/api/v0/search/jobs?query=Ruby+on+Rails&per_page=2&page=1&expand=[%22company%22]'

client.commands = new Collection();


for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.data.name, command);
}

client.on("ready", () => {
    const Guilds = client.guilds.cache.map(guild => guild.id);
    console.log(Guilds);
    console.log("Get On Bot is online!!")
});

client.on("messageCreate", async (message) => { 
    
 });

console.log({config: config.DISCORD_TOKEN})
client.login(config.DISCORD_TOKEN);
