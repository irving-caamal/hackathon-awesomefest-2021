const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies to ping with pong'),
    async execute(interaction){
        await interaction.reply('pong');
    }
}