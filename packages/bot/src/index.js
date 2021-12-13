const config = require('./config')
const Discord  = require("discord.js");
const fetch = require("node-fetch");

//curl --location -g --request GET 'https://www.getonbrd.com/api/v0/search/jobs?query=Ruby+on+Rails&per_page=2&page=1&expand=[%22company%22]'
const base_url = 'https://sandbox.getonbrd.dev/api/v0'
function searchJobs(query = 'php', per_page = 2, page = 1, expand = ['company']) {
    console.log({query})
    return fetch(`${base_url}/search/jobs?query=${query}&per_page=2&page=1&expand=["company"]`)
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


client.on("messageCreate", async (message) => { 
   if(message.content.startsWith('/')) {
       let queryLength = message.content.split(' ')
        let query = queryLength.splice(1, queryLength.length - 1).join(' ')
       const jobs = await searchJobs(query)
       console.log({data: jobs.data})
       jobs.data.map(job => {
        message.reply(job.id);
       })
       
   }
});
console.log({config})
client.login(config.DISCORD_TOKEN);