const Discord  = require("discord.js");
const fetch = require("node-fetch");
const { DISCORD_TOKEN, PREFIX } = require('./config');

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
function searchJobs(query){
    return fetch(`https://www.getonbrd.com/api/v0/search/jobs?query=Ruby+on+Rails&per_page=2&page=1&expand=["company"]`)
    .then(res=> {
        return res.json()
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log(error)
    })
}


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

client.login(DISCORD_TOKEN);