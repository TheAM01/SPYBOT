import Discord from 'discord.js'
import client from './Main/client.js'
import messages from "./Handlers/messages.js";
import express from 'express';

const app = express();


client.on('ready', c => {
    console.log('Bot is ready and running.');
});

client.on('messageCreate', messages)

client.login(process.env.TOKEN)

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.listen(process.env.PORT || 8080)