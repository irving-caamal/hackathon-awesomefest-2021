require('dotenv').config();

const DISCORD_TOKEN=process.env.DISCORD_TOKEN || '';
const guildId=process.env.GUILD_ID || '';
const clientId=process.env.CLIENT_ID || '';

const config = {
    DISCORD_TOKEN,
}
module.exports = {
    config
}