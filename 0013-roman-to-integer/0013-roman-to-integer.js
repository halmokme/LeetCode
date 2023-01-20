/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const rome = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
    let result = rome[s[0]];
    for(let i=1; i<s.length; i++) {
        let prev = s[i-1];
        if(prev === 'C' && s[i] === 'M') result += 800; 
        else if(prev === 'C' && s[i] === 'D') result += 300; 
        else if(prev === 'X' && s[i] === 'C') result += 80; 
        else if(prev === 'X' && s[i] === 'L') result += 30;
        else if(prev === 'I' && s[i] === 'X') result += 8; 
        else if(prev === 'I' && s[i] === 'V') result += 3;
        else result += rome[s[i]];
    }
    return result;
};