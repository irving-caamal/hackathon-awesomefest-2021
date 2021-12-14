const Discord  = require("discord.js");

module.exports = {
    name: "ready",
    once:true,
    async execute (client){
    
        client.user.setActivity("Getting Jobs!! 👌",{
            type: "COMPETING",
            name: "Discord",
        });

        const channel_welcome = client.channels.cache.get("920188931935457290");

        if(!channel_welcome) return;

    let Embed = new Discord.MessageEmbed()
    .setColor(client.color)
    .setTitle("¡Escoge el rol de tu preferencia!")
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setDescription("¡Aqui puedes elegir los roles de tu preferencia!")
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

    let channel = client.channels.cache.get("920172355987324939")

    let msg = await channel.send({embeds: [Embed], components: [menu]})

    const filter = async() => true;
    const collector = msg.createMessageComponentCollector({filter})

    collector.on("collect", async menu => {

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
    })
    },
};