const Discord  = require("discord.js");
const fetch = require("node-fetch");
const { DISCORD_TOKEN } = require('./config');

//curl --location -g --request GET 'https://www.getonbrd.com/api/v0/search/jobs?query=Ruby+on+Rails&per_page=2&page=1&expand=[%22company%22]'
function searchJobs(query){
    return fetch(`https://www.getonbrd.com/api/v0/search/jobs?query=Ruby+on+Rails&per_page=2&page=1&expand=["company"]`)
    .then(res=> {
        return res.json()
    })
    .then(data => {
        return data;
    })
}

const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS']
    }
);

client.on("ready", () => {
    const Guilds = client.guilds.cache.map(guild => guild.id);
    console.log(Guilds);
    console.log("Get On Bot is online!!")
});


client.on("messageCreate", message => { 
    searchJobs("php").then(
        jobs =>message.channel.send(jobs)
    )

    //console.log(message.content);
});


client.login(DISCORD_TOKEN);

//console.log("Hello discord bot");