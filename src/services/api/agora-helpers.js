export function toAgoraDate(date) {
    return date.toISOString().split('T')[0]; // TODO: UTC problem, do not rely on this!
}

const TagIcons = {
    "Economía": "money bill alternate outline ",
    "Derecho": "university ",
    "Salud": "first aid ",
    "Educación": "pencil alternate ",
    "Medio Ambiente": "tree ",
    "Crimen": "balance scale ",
    "Ciencia": "flask ",
    "Cultura": "ticket alternate ",
    "JEP": "handshake outline ",
}

export function getTagIcon(tagName) {
    return TagIcons[tagName];
}

export function parseQueryString(query) {
    var obj = {},
        qPos = query.indexOf("?"),
    tokens = query.substr(qPos + 1).split('&'),
    i = tokens.length - 1;
    if (qPos !== -1 || query.indexOf("=") !== -1) {
        for (; i >= 0; i--) {
            var s = tokens[i].split('=');
            obj[unescape(s[0])] = s.hasOwnProperty(1) ? unescape(s[1]) : null;
        };
    }
    return obj;
}