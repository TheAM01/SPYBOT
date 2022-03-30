import {MessageEmbed} from 'discord.js'
import client from '../Main/client.js'

/**
 * @param success {Object}: success type object with parameters
 * @param person {GuildMember}: guild member object
 * @returns {MessageEmbed}
 */


const success = (success, person) => {

    return new MessageEmbed()
        .setTitle(`${success.title}`)
        .setDescription(success.description)
        .setColor(client.colors.success)
        .setFooter({
            text: `CM: ${success.command}, N: ${success.num}, ID: ${person.id}`,
            iconURL: person.displayAvatarURL()
        })

}

export default success