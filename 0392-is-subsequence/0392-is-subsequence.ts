function isSubsequence(s: string, t: string): boolean {
    for(let i=0; i<s.length; i++) {
        let idx = t.indexOf(s[i]);
        if(idx === -1) return false;
        else {
            t = t.substr(idx+1);
        }
    }
    return true;
};