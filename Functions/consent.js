import db from "../Main/db.js";

async function setConsent (msg, args, glob) {

    let person;

    if (msg.author.id === "949310364565274644") person = 'saira'
    else if (msg.author.id === "726735174229819392") person = 'mueed'
    else if (msg.author.id === "700733092595236995") person = 'mooni'
    else return msg.channel.send('Error 401: `UNAUTHORIZED`')

    if (!args[1]) return msg.channel.send(`Error 401: Missing argument \`[consent:boolean]\`.`);

    let con = args[1].toString().toLowerCase();

    con === 'true'? con = true : con = false;

    await db.set(`${person}_consent`, con)

    if (con == true) return msg.reply('Set `self_consent` to `true`. `SpyMessageInstance` is now enabled for global scope.')
    else return msg.reply('Set `self_consent` to `false`. `SpyMessageInstance` is now disabled for global scope.')


}

export default setConsent