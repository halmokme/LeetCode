function findMaxConsecutiveOnes(nums: number[]): number {

    let max = 0;
    let count = 0;  
    while(nums.length) {
        let num = nums.pop();
        if(num === 1) count++;
        else count = 0;
        max = Math.max(max, count);
    }
    
    return max;
};