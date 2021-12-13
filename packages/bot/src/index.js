const Discord  = require("discord.js");
const fetch = require("node-fetch");
const { DISCORD_TOKEN, PREFIX } = require('./config');

const { Collection, Intents } = require("discord.js");

const fs = require('fs');

const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith(".js"))



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

const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS']
    }
);

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


client.on("messageCreate", async message => { 
    if(!message.content.startsWith("!")){return;}
    var command = message.content.substring(1);
    //console.log(command)
    if(!client.commands.has(command)) return;

    try{
        await client.commands.get(command).execute(message);
    } catch(error){
        console.error(error);
        await msg.reply({content:"there was an error", ephemeral:true})
    }
    // searchJobs("php").then(
    //     jobs =>message.channel.send(jobs)
    // )
});

client.on("interactionCreate", interaction =>{
    console.log(interaction);
})

client.login(DISCORD_TOKEN);