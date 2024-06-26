export function stringHash(x:string) {
    var hash = 0, i, chr;
    if (x.length === 0) return hash;
    for (i = 0; i < x.length; i++) {
        chr = x.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}