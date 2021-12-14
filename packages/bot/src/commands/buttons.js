const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageActionRow, MessageButton, IntegrationApplication } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Hola ¿Deseas mantenerte informado acerca de los ultimos trabajos segun tus ROLES?'),
    async execute(interaction){
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('interesado')
                .setLabel('Estoy interesado!! 👩🏻‍💻 ')
                .setStyle('PRIMARY'),

                new MessageButton()
                .setCustomId('no')
                .setLabel('Por ahora no!! 👀 ')
                .setStyle('DANGER'),
            )

            interaction.reply({
                content:'Hola 😄 ¿Deseas mantenerte informado acerca de los ultimos trabajos segun tus ROLES?!', components:[row]
            });
    }
}