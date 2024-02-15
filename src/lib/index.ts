export function pluralize(text: string, number: number) {
    return number === 1 ? text : text + "s";
}
