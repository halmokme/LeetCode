/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let storage = '';
    let maxLength = 0;
    for(let i=0; i<s.length; i++) {
        if(storage.includes(s[i])) {
            storage = storage.slice(storage.indexOf(s[i])+1);
        }
        storage += s[i];
        if(storage.length > maxLength) {
            maxLength = storage.length;
        }
    }
    return maxLength;
};