import db from '../Main/db.js';
import client from "../Main/client.js";

import registerMessage from "../Functions/register.js";
import init from "../Functions/init.js";
import consent from "../Functions/consent.js";
import fetch from "../Functions/fetch.js";

import startEmbed from "../Embeds/start.js";


async function messageHandler (msg) {

    if (!msg.content) return
    if (msg.content.startsWith('^') && msg.channel.id !== "955558721788993566") return msg.reply('`400`: Commands can not be accessed in this channel.')

    let args = msg.content.split(' ').filter((x) => x !== '');
    let cmd = args[0].toString().toLowerCase();
    const glob = {
        time: new Date()
    }

    // if (cmd === '^init') {
    //     return await init(msg, args, glob)
    // }

    if (cmd === '^consent') {
        return await consent(msg, args, glob);

    }

    if (cmd === '^fetch') {
        return fetch(msg, args, glob)
    }

    if (cmd === '^init') {
        await db.set('mueed_db_messages', []);
        await db.set('saira_db_messages', []);
        await db.set('mooni_db_messages', []);
        return msg.reply('`200`')
    }

    if (cmd === '^info') {
        const embed = startEmbed(msg, args)
        return msg.channel.send({embeds: [embed]})
    }

    if (msg.author.id === '949310364565274644' || msg.author.id === "726735174229819392" || msg.author.id === '700733092595236995') {
        return await registerMessage(msg, glob)
    }




}



export default messageHandler
