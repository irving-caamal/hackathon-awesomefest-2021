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
    if(message.content.startsWith('/')) {
        let queryLength = message.content.split(' ')
         let query = queryLength.splice(1, queryLength.length - 1).join(' ')
        const jobs = await searchJobs(query)
        if (!jobs.data) {
         message.reply('Sorry there are no jobs matching your search');
        }
        const embeds = []
        jobs.data.map((job) => {
        
            const newEmbed = {
                color: 0x0099ff,
                title: job.attributes.title,
                url: job.links.public_url,
                author: {
                    name: job.attributes.company.data.attributes.name,
                    icon_url: job.attributes.company.data.attributes.logo,
                    url: job.attributes.company.data.attributes.web,
                },
                description: job.attributes.description.replaceAll('<p>', '\n').replaceAll('</p>', '\n').replaceAll('</li><li>', '\n').replaceAll('<ul><li>', '\n').replaceAll('</li></ul>', '\n').replaceAll('&amp;', 'and'),
                thumbnail: {
                    url: job.attributes.company.data.attributes.logo,
                },
                fields: [
                    {
                        name: 'Salary from',
                        value: job.attributes.min_salary ? `${job.attributes.min_salary}` : 'Not available',
                        inline: true,
                    },
                    {
                        name: 'Country',
                        value: job.attributes.country,
                        inline: true,
                    },
                    {
                        name: 'Categoria',
                        value: job.attributes.category_name,
                        inline: true,
                    },
                ],
                timestamp: new Date(job.attributes.published_at),
                footer: {
                    text: 'Some footer text here',
                },
            };
            embeds.push(newEmbed)
        })
        
        message.channel.send({embeds: embeds});
    }
 });

console.log({config})
client.login(config.DISCORD_TOKEN);
