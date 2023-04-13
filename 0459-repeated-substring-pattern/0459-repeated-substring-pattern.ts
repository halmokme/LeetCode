function repeatedSubstringPattern(s: string): boolean {

    if(s.length < 2) return false;
    
    let pattern = '';
    for(let i=0; i<s.length/2; i++) {
        pattern += s[i];
        if(!s.split(pattern).join('').length) return true;
    }
    
    return false;
};