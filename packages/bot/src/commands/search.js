const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord  = require("discord.js");
const {fetchJobs} = require('../services/searchJobs')
const { removeEmojis } = require('../utils/stringUtils')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('search')
        .addStringOption(option => option.setName('query').setDescription('Enter a query (eg. "python developer")'))
        .setDescription('Search for jobs'),
    async execute(message) {
        // Get jobs by query
        let embeds = [];
        let responseMessages = ''
        const query = message.options.getString('query');
        if(query) {
            let findedJobsByQuery = await fetchJobs(query);
            if(!findedJobsByQuery.length) {
                let newembed = new Discord.MessageEmbed().setTitle("test").setDescription(`No encontramos ofertas basdas en tu busqueda: ${query}`);
                embeds = [...embeds, newembed]
            }
            embeds = [...findedJobsByQuery]
        }
        // Get jobs by roles
        let roles = message.guild.roles.cache.filter(r => message.member.roles.member._roles.includes(r.id));
        rolesString = '';
        let findedJobsByRole = roles.map(async (role) => {
            if(role.name !== 'Server Booster') {
                rolesString = ` ${removeEmojis(role.name)}`;
                const findedJobsByRole = await fetchJobs(rolesString);
                if(!findedJobsByRole.length > 0) {return}
            
                let newembed = new Discord.MessageEmbed()
                                .setTitle("Hi")
                                .setColor(0x008000)
                                .setDescription(`Aqui tienes las ultimas ofertas basadas en tu rol\n`);
                embeds = [...embeds, newembed]
                return embeds = [...embeds,...findedJobsByRole]
            }
            return;
        })
        // Resolve all promises
        return Promise.all(findedJobsByRole).then(() => {
            if(!embeds.length) {
                message.reply(responseMessages);
            }
            return message.reply({embeds: embeds});
        })
    }
}