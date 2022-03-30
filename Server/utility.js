function inlineCode (text, indentation) {
    if (typeof indentation !== 'string') indentation = '';
    if (!indentation) indentation = '';
    return`\`${indentation}${text}${indentation}\``
}

function multilineCode(text) {
    return `\`\`\`\n${text}\n\`\`\``
}

function normalizeParameters(params) {

    let nomPar = [];

    for (let i = 0; i < params.length; i++) {
        nomPar.push(
            `${i+1}. ***\`${params[i].name}\`***: ${params[i].value} `
        )
    };

    nomPar = nomPar.join('\n')

    return {
        name: '**Parameters**',
        value: nomPar
    }

}

export default {
    inlineCode,
    multilineCode,
    normalizeParameters
}

