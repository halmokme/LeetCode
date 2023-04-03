function findTheDifference(s: string, t: string): string {
    let sumS = 0;
    for(let i=0; i<s.length; i++) {
        sumS += s.charCodeAt(i);
    }

    let sumT = 0;
    for(let i=0; i<t.length; i++) {
        sumT += t.charCodeAt(i);
    }

    return String.fromCharCode(sumT - sumS);
};