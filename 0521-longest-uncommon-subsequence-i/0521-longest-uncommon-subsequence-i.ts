function findLUSlength(a: string, b: string): number {
    if(!a.includes(b) || !b.includes(a)) {
        return Math.max(a.length, b.length);
    }
    else return -1;
};