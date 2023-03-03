/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    let memo = [0,1,2,3];
    if(n <= 3) return memo[n];
    
    for(let i=4; i<=n; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n];
};