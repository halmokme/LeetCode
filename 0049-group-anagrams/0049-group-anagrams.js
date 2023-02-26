/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function(strs) {
    const data = {};
    let word;
    for(let str of strs) {
        word = str.split('').sort().join('');
        if(!data[word]) data[word] = [];
        data[word].push(str);
    }
    return Object.values(data);
};