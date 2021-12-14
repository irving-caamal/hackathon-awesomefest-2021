const Discord  = require("discord.js");
const { button } = require("../commands/buttons");
const { MessageActionRow, MessageButton, IntegrationApplication } = require('discord.js');

module.exports = {
    name: "ready",
    once:true,
    async execute (client,interaction){
    
        client.user.setActivity("Getting Jobs!! 👌",{
            type: "COMPETING",
            name: "Discord",
        });

        let channel = client.channels.cache.get("920172355987324939")

        /** ROLES POR PAISS  */
        let argentina = channel.guild.roles.cache.get("920348906892689408")
        let brasil = channel.guild.roles.cache.get("920349775637925888")
        let bolivia = channel.guild.roles.cache.get("920349824606433320")
        let chile = channel.guild.roles.cache.get("920349884203282483")
        let colombia = channel.guild.roles.cache.get("920349918760140810")
        let costarica = channel.guild.roles.cache.get("920349960745136218")
        let cuba = channel.guild.roles.cache.get("920350007159312424")
        let ecuador = channel.guild.roles.cache.get("920350081654353931")
        let estadosunidos = channel.guild.roles.cache.get("920350132736774185")
        let espana = channel.guild.roles.cache.get("920350167700496446")
        let guatemala = channel.guild.roles.cache.get("920350216488632411")
        let honduras = channel.guild.roles.cache.get("920350254514208868")
        let mexico = channel.guild.roles.cache.get("920350311531573332")
        let nicaragua = channel.guild.roles.cache.get("920350359531188275")
        let panama = channel.guild.roles.cache.get("920350396168429609")
        let paraguay = channel.guild.roles.cache.get("920350434240122920")
        let peru = channel.guild.roles.cache.get("920350482935971952")
        let republica = channel.guild.roles.cache.get("920350689874554970")
        let uruguay = channel.guild.roles.cache.get("920350729384902656")
        let venezuela = channel.guild.roles.cache.get("920350793457074176")


        const argentinaEmoji = '🇦🇷';
        const brasilEmoji = '🇧🇷';
        const boliviaEmoji = '🇧🇴';
        const chileEmoji = '🇨🇱';
        const colombiaEmoji = '🇨🇴';
        const costaEmoji = '🇨🇷';
        const cubaEmoji = '🇨🇺';
        const ecuadorEmoji = '🇪🇨';
        const estadosEmoji = '🇺🇸';
        const espanaEmoji = '🇪🇸';
        const guatemalaEmoji = '🇬🇹';
        const hondurasEmoji = '🇭🇳';
        const mexicoEmoji = '🇲🇽';
        const nicaraguaEmoji = '🇳🇮';
        const panamaEmoji = '🇵🇦';
        const paraguayEmoji = '🇵🇾';
        const peruEmoji = '🇵🇪';
        const republicaEmoji = '🇩🇴';
        const uruguayEmoji = '🇺🇾';
        const venezuelaEmoji = '🇻🇪';

 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('🌎Roles por país!')
            .setDescription('Escoge de donde eres!!!\n\n'
                + `${argentinaEmoji} Argentina!! \n`
                + `${brasilEmoji} Brasil!! \n`
                + `${boliviaEmoji} Bolivia!! \n`
                + `${chileEmoji} Chile!! \n`
                + `${colombiaEmoji} Colombia!! \n`
                + `${costaEmoji} Costa Rica!! \n`
                + `${cubaEmoji} Cuba!! \n`
                + `${ecuadorEmoji} Ecuador!! \n`
                + `${estadosEmoji} Estados Unidos!! \n`
                + `${espanaEmoji} España!! \n`
                + `${guatemalaEmoji} Guatemala!! \n`
                + `${hondurasEmoji} Honduras!! \n`
                + `${mexicoEmoji} Mexico!! \n`
                + `${nicaraguaEmoji} Nicaragua!! \n`
                + `${panamaEmoji} Panama!! \n`
                + `${paraguayEmoji} Paraguay!! \n`
                + `${peruEmoji} Peru!! \n`
                + `${republicaEmoji} Republica Dominicana!! \n`
                + `${uruguayEmoji} Uruguay!! \n`
                + `${venezuelaEmoji} Venezuela!! \n`
                + `*Si tu país no se encuentra en el listado, comunícate con @admins para agregarlo 😄`);
        //let msg = await channel.send({embeds: [Embed], components: [menu]})
        let messageEmbed = await channel.send({embeds:[embed]});
        messageEmbed.react(argentinaEmoji);
        messageEmbed.react(brasilEmoji);
        messageEmbed.react(boliviaEmoji);
        messageEmbed.react(chileEmoji);
        messageEmbed.react(colombiaEmoji);
        messageEmbed.react(costaEmoji);
        messageEmbed.react(ecuadorEmoji);
        messageEmbed.react(estadosEmoji);
        messageEmbed.react(espanaEmoji);
        messageEmbed.react(guatemalaEmoji);
        messageEmbed.react(hondurasEmoji);
        messageEmbed.react(mexicoEmoji);
        messageEmbed.react(nicaraguaEmoji);
        messageEmbed.react(panamaEmoji);
        messageEmbed.react(peruEmoji);
        messageEmbed.react(republicaEmoji);
        messageEmbed.react(uruguayEmoji);
        messageEmbed.react(venezuelaEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === argentinaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(argentina);
                }
                if (reaction.emoji.name === brasilEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(brasil);
                }
                if (reaction.emoji.name === boliviaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bolivia);
                }
                if (reaction.emoji.name === chileEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(chile);
                }
                if (reaction.emoji.name === colombiaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(colombia);
                }
                if (reaction.emoji.name === costaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(costarica);
                }
                if (reaction.emoji.name === ecuadorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ecuador);
                }
                if (reaction.emoji.name === estadosEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(estadosunidos);
                }
                if (reaction.emoji.name === espanaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(espana);
                }
                if (reaction.emoji.name === guatemalaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(guatemala);
                }
                if (reaction.emoji.name === hondurasEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(honduras);
                }
                if (reaction.emoji.name === mexicoEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mexico);
                }
                if (reaction.emoji.name === nicaraguaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(nicaragua);
                }
                if (reaction.emoji.name === panamaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(panama);
                }
                if (reaction.emoji.name === peruEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(peru);
                }
                if (reaction.emoji.name === republicaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(republica);
                }
                if (reaction.emoji.name === uruguayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(uruguay);
                }
                if (reaction.emoji.name === venezuelaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(venezuela);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === argentinaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(argentina);
                }
                if (reaction.emoji.name === brasilEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(brasil);
                }
                if (reaction.emoji.name === boliviaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(bolivia);
                }
                if (reaction.emoji.name === chileEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(chile);
                }
                if (reaction.emoji.name === colombiaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(colombia);
                }
                if (reaction.emoji.name === costaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(costarica);
                }
                if (reaction.emoji.name === ecuadorEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ecuador);
                }
                if (reaction.emoji.name === estadosEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(estadosunidos);
                }
                if (reaction.emoji.name === espanaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(espana);
                }
                if (reaction.emoji.name === guatemalaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(guatemala);
                }
                if (reaction.emoji.name === hondurasEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(honduras);
                }
                if (reaction.emoji.name === mexicoEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mexico);
                }
                if (reaction.emoji.name === nicaraguaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(nicaragua);
                }
                if (reaction.emoji.name === panamaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(panama);
                }
                if (reaction.emoji.name === peruEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(peru);
                }
                if (reaction.emoji.name === republicaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(republica);
                }
                if (reaction.emoji.name === uruguayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(uruguay);
                }
                if (reaction.emoji.name === venezuelaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(venezuela);
                }
            } else {
                return;
            }
        });

    /** ROLES POR STATUS  */
    let EmbedStatus = new Discord.MessageEmbed()
    .setColor(client.color)
    .setTitle("✨Roles según tu estatus")
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setDescription("¡Aqui puedes elegir los roles de tu preferencia segun tu estatus!!!")
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true}))

    const menu2 = new Discord.MessageActionRow().addComponents(new Discord.MessageSelectMenu()
    .setCustomId("menu2")
    .setMaxValues(3)
    .setMinValues(1)
    .setPlaceholder("¡¡Esperamos tus roles !!")
    .addOptions([{label: "🔍 Buscando trabajo", description: "🔍 Buscando trabajoDescripcion", emoji: "🔍", value: "buscando"}, {label: "💼 Actualmente con trabajo", description: "💼 Actualmente con trabajo Descripcion", emoji: "💼", value: "contrabajo"}, 
    {label: "👔 Contratando talento", description: "Backend Descripcion", emoji: "👔", value: "contratando"},
    {label: "📚 Estudiante", description: "FullStack Descripcion", emoji: "📚", value: "estudiante"},
    {label: "🤓 Mentor", description: "FullStack Descripcion", emoji: "🤓", value: "mentor"},
    ]))
    
    

    let msg2 = await channel.send({embeds: [EmbedStatus], components: [menu2]})

    const filter2 = async() => true;
    const collector2 = msg2.createMessageComponentCollector({filter2})

        collector2.on("collect", async menu2 => {

                    
        let buscando = channel.guild.roles.cache.get("920350844044591105")
        let contrabajo = channel.guild.roles.cache.get("920350881529077770")
        let contratando = channel.guild.roles.cache.get("920350913716166737")
        let estudiante = channel.guild.roles.cache.get("920350950873509978")
        let mentor = channel.guild.roles.cache.get("920350986319573043")

            for(let i = 0; i < menu.values.length; i++) {
                if(menu.values[i] === "buscando") menu.member.roles.add(buscando.id)
                if(menu.values[i] === "contrabajo") menu.member.roles.add(contrabajo.id)
                if(menu.values[i] === "contratando") menu.member.roles.add(contratando.id)
                if(menu.values[i] === "estudiante") menu.member.roles.add(estudiante.id)
                if(menu.values[i] === "mentor") menu.member.roles.add(mentor.id)
            }

            if(menu.member.roles.cache.has(buscando.id) && !menu.values.includes("buscando")) menu.member.roles.remove(buscando.id)
            if(menu.member.roles.cache.has(contrabajo.id) && !menu.values.includes("contrabajo")) menu.member.roles.remove(contrabajo.id)
            if(menu.member.roles.cache.has(contratando.id) && !menu.values.includes("contratando")) menu.member.roles.remove(contratando.id)
            if(menu.member.roles.cache.has(estudiante.id) && !menu.values.includes("estudiante")) menu.member.roles.remove(estudiante.id)
            if(menu.member.roles.cache.has(mentor.id) && !menu.values.includes("mentor")) menu.member.roles.remove(mentor.id)
           

            menu.reply({content: "¡ Tu rol ha cambiado !", ephemeral: true})
        })


    /** ROLES POR TRABAJOOO  */
    let Embed = new Discord.MessageEmbed()
    .setColor(client.color)
    .setTitle("📗 Roles por área de mayor conocimiento!!! 📗")
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setDescription("¡Aqui puedes elegir los roles de tu preferencia segun tus conocimientos, puedes elegir hasta 3 opciones!!!")
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true}))

    const menu = new Discord.MessageActionRow().addComponents(new Discord.MessageSelectMenu()
    .setCustomId("menu")
    .setMaxValues(3)
    .setMinValues(0)
    .setPlaceholder("¡¡Esperamos tus roles !!")
    .addOptions([{label: "UX/UI/Design", description: "UX/UI/Design Descripcion", emoji: "💌", value: "ux/ui"}, {label: "FrontEnd", description: "FrontEnd Descripcion", emoji: "🏢", value: "frontend"}, 
    {label: "🛠 BackEnd", description: "Backend Descripcion", emoji: "🛠", value: "backend"},
    {label: "🐙 FullStack", description: "FullStack Descripcion", emoji: "🐙", value: "fullstack"},
    {label: "📱 Mobile", description: "Mobile Descripcion", emoji: "🛠", value: "mobile"},
    {label: "🗃 DataScience", description: "DataScience Descripcion", emoji: "🛠", value: "datascience"},
    {label: "🔒 DevOps & Ciberseguridad", description: "DevOps & Ciberseguridad Descripcion", emoji: "🔒", value: "devops"},
    {label: "🤖 AI & Machine Learning", description: "AI & Machine Learning Descripcion", emoji: "🤖", value: "ai"},
    {label: "🏈 Agile/Innovation", description: "Agile/Innovation Descripcion", emoji: "🏈", value: "agile"},
    {label: "🕹 Gaming", description: "Gaming Descripcion", emoji: "🕹", value: "gaming"},
    {label: "📈 Growth-Marketing", description: "Growth-Marketing Descripcion", emoji: "📈", value: "marketing"},
    ]))
    
    

    let msg = await channel.send({embeds: [Embed], components: [menu]})
   
    const filter = async() => true;
    const collector = msg.createMessageComponentCollector({filter})

        collector.on("collect", async(menu,button) => {

            let ui = channel.guild.roles.cache.get("920164764112531496")
            let frontend = channel.guild.roles.cache.get("920165346281926716")
            let backend = channel.guild.roles.cache.get("920165497016844298")
            let fullstack = channel.guild.roles.cache.get("920165563827892234")
            let mobile = channel.guild.roles.cache.get("920165640306823168")
            let datascience = channel.guild.roles.cache.get("920165744891793418")
            let devops = channel.guild.roles.cache.get("920165846779842601")
            let ai = channel.guild.roles.cache.get("920165907962167328")
            let agile = channel.guild.roles.cache.get("920165943357865984")
            let gaming = channel.guild.roles.cache.get("920166040321794069")
            let marketing = channel.guild.roles.cache.get("920166107401289748")


            for(let i = 0; i < menu.values.length; i++) {
                if(menu.values[i] === "ux/ui") menu.member.roles.add(ui.id)
                if(menu.values[i] === "frontend") menu.member.roles.add(frontend.id)
                if(menu.values[i] === "backend") menu.member.roles.add(backend.id)
                if(menu.values[i] === "fullstack") menu.member.roles.add(fullstack.id)
                if(menu.values[i] === "mobile") menu.member.roles.add(mobile.id)
                if(menu.values[i] === "datascience") menu.member.roles.add(datascience.id)
                if(menu.values[i] === "devops") menu.member.roles.add(devops.id)
                if(menu.values[i] === "ai") menu.member.roles.add(ai.id)
                if(menu.values[i] === "agile") menu.member.roles.add(agile.id)
                if(menu.values[i] === "gaming") menu.member.roles.add(gaming.id)
                if(menu.values[i] === "marketing") menu.member.roles.add(marketing.id)
            }

            if(menu.member.roles.cache.has(ui.id) && !menu.values.includes("ux/ui")) menu.member.roles.remove(ui.id)
            if(menu.member.roles.cache.has(frontend.id) && !menu.values.includes("frontend")) menu.member.roles.remove(frontend.id)
            if(menu.member.roles.cache.has(backend.id) && !menu.values.includes("backend")) menu.member.roles.remove(backend.id)
            if(menu.member.roles.cache.has(backend.id) && !menu.values.includes("fullstack")) menu.member.roles.remove(fullstack.id)
            if(menu.member.roles.cache.has(backend.id) && !menu.values.includes("mobile")) menu.member.roles.remove(mobile.id)
            if(menu.member.roles.cache.has(backend.id) && !menu.values.includes("datascience")) menu.member.roles.remove(datascience.id)
            if(menu.member.roles.cache.has(backend.id) && !menu.values.includes("devops")) menu.member.roles.remove(devops.id)
            if(menu.member.roles.cache.has(backend.id) && !menu.values.includes("ai")) menu.member.roles.remove(ai.id)
            if(menu.member.roles.cache.has(backend.id) && !menu.values.includes("agile")) menu.member.roles.remove(agile.id)
            if(menu.member.roles.cache.has(backend.id) && !menu.values.includes("gaming")) menu.member.roles.remove(gaming.id)
            if(menu.member.roles.cache.has(backend.id) && !menu.values.includes("marketing")) menu.member.roles.remove(marketing.id)

            menu.reply({content: "¡ Tu rol ha cambiado !", ephemeral: true})

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

            menu.member.send(
                {
                    content:'Hola 😄 ¿Deseas mantenerte informado acerca de los ultimos trabajos segun tus ROLES?!', components:[row]
                }
            )
           
        })
    },
};