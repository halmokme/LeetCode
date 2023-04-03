function findTheDifference(s: string, t: string): string {
    let arr = s.split('');
    for(let i=0; i<t.length; i++) {
        let idx = arr.indexOf(t[i]);
        if(idx === -1) return t[i];
        else arr.splice(idx, 1);
    }
};