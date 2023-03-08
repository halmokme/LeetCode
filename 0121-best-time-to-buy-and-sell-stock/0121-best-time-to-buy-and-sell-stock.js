/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let res = 0, min = prices[0];
    for(let i=1; i<prices.length; i++) {
        min = Math.min(min, prices[i]);
        res = Math.max(prices[i]-min, res);
    }
    return res;
};