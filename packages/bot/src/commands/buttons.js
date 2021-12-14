const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageActionRow, MessageButton, IntegrationApplication } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Replies with some buttons'),
    async execute(interaction){
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('PROFESIONAL')
                .setLabel('Soy Profesional! 👩🏻‍💻 ')
                .setStyle('PRIMARY'),

                new MessageButton()
                .setCustomId('EMPLEADOR')
                .setLabel('Soy Empleador! 👀 ')
                .setStyle('SECONDARY'),
            )

            interaction.reply({
                content:'You are on board!!', components:[row]
            });
    }
}