function findLUSlength(a: string, b: string): number {
    if(!b.includes(a) || !a.includes(b)) {
        if(a.length >= b.length) return a.length;
        else return b.length;
    }
    else return -1;
};