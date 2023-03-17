/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let hashS = {}, hashT = {};

    for (let i=0; i<s.length; i++) {
        if(s[i] in hashS) hashS[s[i]]++;
        else hashS[s[i]] = 1;

        if(t[i] in hashT) hashT[t[i]]++; 
        else hashT[t[i]] = 1;
    }

    for (key in hashS) {
        if(hashS[key] !== hashT[key]) return false;
    }
    
    return true;
    
};