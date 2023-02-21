/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const dp = (s, p, si, pi, memo) => {
    if (si > s.length) { return false; }
    if (pi >= p.length) { return si >= s.length; }
    if (memo[si][pi] !== undefined) { return memo[si][pi]; }
    
    if (s[si] === p[pi] || p[pi] === '?') {
        memo[si][pi] = dp(s, p, si + 1, pi + 1, memo);
    } else if (p[pi] === '*') {
        memo[si][pi] = dp(s, p, si, pi + 1, memo) || dp(s, p, si + 1, pi, memo);
    }  else {
        memo[si][pi] = false;
    }
    
    return memo[si][pi];
}

const isMatch = (s, p) => {
    const memo = Array.from(Array(s.length + 1), () => Array(p.length + 1));
    return dp(s, p, 0, 0, memo);
};