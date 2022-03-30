import Discord from 'discord.js'
import client from './Main/client.js'
import messages from "./Handlers/messages.js";

client.on('ready', c => {
    console.log('Bot is ready and running.');
});

client.on('messageCreate', messages)

client.login(process.env.TOKEN)