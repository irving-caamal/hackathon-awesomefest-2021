const memberCounter = async (client) => {
   const guild = client.guilds.cache.get('920091691896143932');
   return setInterval(()=>{
     guild.memberCount.toLocaleString();
   },1000);
}
module.exports = { memberCounter }