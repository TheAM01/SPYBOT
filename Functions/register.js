import {SpiedMessageInstance} from "../Server/builders.js";
import db from "../Main/db.js";


async function registerMessage(msg, glob) {

    let person, consent;

    if (msg.author.id === "949310364565274644") person = 'saira'
    else if (msg.author.id === "726735174229819392") person = 'mueed'
    else if (msg.author.id === "700733092595236995") person = 'mooni'
    else return

    const spiedMessage = new SpiedMessageInstance(msg, glob.time);

    await spiedMessage.registerMessage(person);

    await spiedMessage.send(person)

}

export default registerMessage