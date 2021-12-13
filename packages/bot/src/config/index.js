require('dotenv').config()

const DISCORD_TOKEN=process.env.DISCORD_TOKEN || '';
const PREFIX=process.env.PREFIX || '';


module.export = {
    DISCORD_TOKEN, PREFIX
}