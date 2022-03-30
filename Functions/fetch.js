import db from "../Main/db.js";
import {AriaMeta} from "../Server/builders.js";

async function fetch (msg, args, glob) {

    let person;

    if (!args[1]) return msg.reply(`Error: Missing argument \`args[1]: [scope:db_messages]\`.`);
    if (args[1].toString().toLowerCase() !== 'db_messages') return

    if (!args[2]) return msg.reply('Error 400: Missing argument `args[2]: [person:name]`')
    person = args[2].toString().toLowerCase()

    if (person === 'saira') person = 'saira'
    else if (person === "mueed") person = 'mueed'
    else if (person === 'mooni') person = 'mooni'
    else return msg.channel.send('Error 400: `BAD_REQUEST`')

    let cachedMessages = await db.get(`${person}_db_messages`);

    if (!cachedMessages) return msg.reply('`404`')

    // return console.log(cachedMessages);

    cachedMessages.forEach(item => {
        msg.channel.send(
            `${item.author} at ${item.timeStamp} in ${item.channel}: \` ${item.messageContent} \``
        )
    });

}

const meta = new AriaMeta(
    'Fetch',
    'Fetches the `SpiedMessageInstance` objects for `[target]` in the database.',
    '^Fetch db_messages [target]',
    '^Help Fetch',
    'Main/Spyware',
    [
        {name: 'target', value: 'The name of the person whose messages you want to fetch.'}
    ],
    'none',
    'none',
    '1.0',
    'HHAHAHA SPYWARE GO BRRRRRRRRRRRRRRRRRR'
);

export {meta}

export default fetch