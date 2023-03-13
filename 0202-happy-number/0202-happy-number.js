/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    
    // recursive
    let res = true;
    let arr = [];
    const recursive = (sum) => {
        sum = (sum+'').split('').reduce((acc, val) => acc + Math.pow(val, 2), 0);
        if(sum === 1) return;
        if(arr.indexOf(sum) !== -1) {
            res = false;
            return;
        };
        arr.push(sum);
        recursive(sum);
    }
    recursive(n);
    return res;
    
    
    
    // while loop
    // let sum = n;
    // let stack = [];
    // while(1) {
    //     sum = (sum+'').split('').reduce((acc, val) => acc + Math.pow(val, 2), 0);
    //     if(stack.indexOf(sum) > -1) return false;
    //     if(sum === 1) return true;
    //     stack.push(sum);
    // }

};