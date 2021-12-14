//const { DISCORD_TOKEN, PREFIX } = require('./src/config');


module.exports = {
    name:"messageCreate",
    on:true,
    async execute(message,client){
        if(!message.content.startsWith("!")){return;}
        var command = message.content.substring(1);
        command = command.split(" ")[0];//get everything that pass , split and get only the command
        //console.log(command)
        if(!client.commands.has(command)) return;
    
        try{
            await client.commands.get(command).execute(message,client);
        } catch(error){
            console.error(error);
            await msg.reply({content:"there was an error", ephemeral:true})
        }
        // searchJobs("php").then(
        //     jobs =>message.channel.send(jobs)
        // )
    },
}