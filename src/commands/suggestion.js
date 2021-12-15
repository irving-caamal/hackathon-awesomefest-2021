const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggestion')
        .setDescription('Send Suggestion to suggestion channel'),
    async execute(interaction,client){
        var suggestion, suggestionChannel;
        var suggestionChannelId = '920132537488146503';

        interaction.reply('Thanks for the suggestion!');
        suggestion = interaction.content.replace('!suggestion','');

        suggestionChannel = client.channels.cache.get(suggestionChannelId);

        await suggestionChannel.send('Suggestion:' +suggestion).then(
            function(message){
                message.react('✅');
                message.react('❌');
            }
        )
    }
}