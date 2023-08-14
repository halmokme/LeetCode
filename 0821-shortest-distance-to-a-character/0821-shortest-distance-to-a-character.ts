function shortestToChar(s: string, c: string): number[] {
    const result = [];

    for(let i=0; i<s.length; i++) {
        if(s.charAt(i) === c) {
            result.push(0);
        } else {
            const next = s.indexOf(c,i) === -1 ? Infinity : s.indexOf(c,i) -i;
            const prev = result.lastIndexOf(0) === -1 ? Infinity : i- result.lastIndexOf(0);
            result.push(Math.min(next, prev));
        }   
    }
    return result;
};