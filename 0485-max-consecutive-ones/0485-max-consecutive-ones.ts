function findMaxConsecutiveOnes(nums: number[]): number {

    let count = 0;
    let max = 0;

    for(let num of nums) {
        if(num === 1) count++;
        else count = 0;
        max = Math.max(max, count);
    }
    
    return max;
};