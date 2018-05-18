export function toAgoraDate(date) {
    return date.toISOString().split('T')[0]; // TODO: UTC problem, do not rely on this!
}

const TagIcons = {
    "Economía": "money bill alternate outline ",
    "Derecho": "university ",
    "Salud": "first aid ",
    "Educación": "pencil alternate ",
    "Medio Ambiente": "tree ",
    "Crimen": "balance scale",
    "Ciencia": "flask ",
    "Cultura": "ticket alternate ",
    "JEP": "handshake outline ",
}

export function getTagIcon(tagName) {
    return TagIcons[tagName];
}