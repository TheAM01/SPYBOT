import fetch from "node-fetch";
import fs from "fs";


async function getReplitUrl() {

    let request, text;

    try {
        request = await fetch(
            'https://spybot.theam01.repl.co/database',
            {
                headers: {
                    auth_key: "be00ec32ea3e0accf8593d9edbaf7593d28c9b55931b193b52829589e47c548b"
                }
            }
        );
    } catch (err) {

        return fs.readFileSync('./Replit-db-url.txt')

    } finally {

        text = await request.text()
        await fs.writeFile('./Replit-db-url.txt', text, () => {})
        return text;

    }

}

export default getReplitUrl