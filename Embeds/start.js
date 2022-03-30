import {MessageEmbed} from "discord.js";
import client from "../Main/client.js";


function startEmbed (msg, args) {

    return new MessageEmbed()
        .setTitle('SpyBot Info')
        .setAuthor(
            {
                name: client.user.username, iconURL: client.user.displayAvatarURL()
            }
        )
        .setDescription('SpyBot is a custom built spyware that spies secretly on `[redacted]`\'s messages and stores them in a database where they can be easily accessed through commands. Note that this bot is not meant to be abused. If abuse is detected, this bot might get destroyed.\n**Commands:**')
        .setColor('#000000')
        .addFields(
            {
                name: '^Help [command]? (coming soon)', value: 'Help for the `[command]` if mentioned'
            }, {
                name: '^Info', value: 'Info on this bot'
            }, {
                name: '^Fetch db_messages [target]', value: 'Fetch `[target]`\'s messages from database'
            }, {
                name: '**Dev commands**', value: '\u200b'
            }, {
                name: '^Init', value: 'Initialize `db_messages`'
            }, {
                name: '^Consent [bool]', value: 'Enable/disable realtime message sending of `target`s'
            }
        )
        .setFooter(
            {
                text: `c: info id: ${msg.author.id}`
            }
        )
        .setTimestamp()

}


export default startEmbed