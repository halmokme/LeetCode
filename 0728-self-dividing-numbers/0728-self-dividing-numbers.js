/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function(left, right) {
    const res = []
    
    for(let i=left; i<=right; i++){
        let temp = i.toString().split(''), pass = true
        for(let j=0; j<temp.length; j++){
            if(i % temp[j] !== 0) pass = false
        }
        if(pass) res.push(i)
    }
    
    return res
};