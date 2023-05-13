function toLowerCase(s: string): string {
    
    // return s.toLowerCase();

    let res = '';
    for(let i=0; i<s.length; i++) {
        if(s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            res += String.fromCharCode(97 + s.charCodeAt(i)-65);
        }
        else res += s[i];
    }

    return res;
};