const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('react')
        .setDescription('Reacts with emojis'),
    async execute(message){
        await message.react('😁')
        .then(()=> message.react('❤️'))
        .then(()=> message.react('⏰'));
    }
}