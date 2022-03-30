import {MessageEmbed} from 'discord.js'
import client from '../Main/client.js'
import util from '../Server/utility.js'

/**
 * @description
 * @param help {Object}: Command/function meta object.
 * @param person {GuildMember}: Author of the message.
 * @returns {MessageEmbed}
 */


const helpEmbed = (help, person) => {

    if (!help.timeout) help.timeout = 'none'

    return new MessageEmbed()
        .setTitle(`${help.name} command help`)
        .setAuthor({
            name: `${client.user.username} help`,
            iconURL: client.user.displayAvatarURL()
        })
        .setColor(client.colors.help)
        .setDescription(`**About the command:**\n${help.description}`)
        .addFields(
            {
                name: 'Category', value: help.category
            }, {
                name: 'Standard syntax', value: `\`\`\`${help.syntax}\`\`\``
            }, util.normalizeParameters(help.params), {
                name: 'Timeout', value: util.inlineCode(` ${help.timeout} `), inline: true
            }, {
                name: 'Required permissions', value: `\` ${help.perms} \``, inline: true
            }
        )
        .setFooter({
            text: `CM: HELP, ID: ${person.id}, I: ${help.name.toLowerCase().replace(/ /g, '_')}`,
            iconURL: person.displayAvatarURL()
        })

}

export default helpEmbed