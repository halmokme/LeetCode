/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {

    let arr = s.split(' ')
    let tmp = {};

    if(pattern.length !== arr.length || new Set([...pattern]).size !== new Set(arr).size) return false;

    for(let i=0; i<pattern.length; i++) {
        if(!tmp[pattern[i]]) tmp[pattern[i]] = arr[i];
        else if(tmp[pattern[i]] !== arr[i]) return false;
    }
    return true;
};