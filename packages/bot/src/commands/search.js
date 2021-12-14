const { SlashCommandBuilder } = require('@discordjs/builders')
const {searchJobs} = require('../services/getOnBoardApi')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('search')
        .addStringOption(option => option.setName('query').setDescription('Enter a query (eg. "python developer")'))
        .setDescription('Search for jobs'),
    async execute(message) {
        const query = message.options.getString('query');
        if(query) {
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
            return message.reply({embeds: embeds});
        }
    }
}