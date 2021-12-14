const memberCounter = async (client) => {
   const guild = client.guilds.cache.get('920091691896143932');
   return setInterval(()=>{
     console.log(guild.memberCount.toLocaleString());
     guild.memberCount.toLocaleString();
   },1000);
}
module.exports = { memberCounter }