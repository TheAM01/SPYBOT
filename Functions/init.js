import db from "../Main/db.js";
import crypto from "../Server/crypto.js";


async function init (msg, args, glob) {

    if (!args[1]) return msg.reply(`Error: Missing argument \`args[1]: [query:string]\`.`)
    if (!args[2]) return msg.reply(`Error: Missing argument \`args[2]: [value:any]\`.`)

    const query = args[1].toString().toLowerCase();
    const value = args[2].toString().toLowerCase();

    msg.channel.send(`Auto detected user: \`${msg.author.id}\`. Enter admin password to set \`${query}\` to \`${value}\`.`)

    const msgFilter = (m) => m.author.id === msg.author.id;

    let collectedMessage = await msg.channel.awaitMessages({ filter: msgFilter, max: 1 });
    collectedMessage = collectedMessage.first()

    if (!crypto.validateHash(collectedMessage.content, 'e6d11dc039b6e6dfaad0387462778757b22cb13a0bc1998bd5748320022a6b54') === true) {
        await collectedMessage.delete();
        return msg.channel.send(`Error 401: \`UNAUTHORIZED\` `)
    }

    await collectedMessage.delete()

    await db.set(query, value);

    return msg.channel.send('`200`')

}

export default init