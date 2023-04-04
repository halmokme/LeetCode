function isSubsequence(s: string, t: string): boolean {
    let arr = t.split('');
    for(let i=0; i<s.length; i++) {
        let idx = arr.indexOf(s[i]);
        if(idx === -1) return false;
        else {
            arr = arr.splice(idx+1);
        }
    }
    return true;
};