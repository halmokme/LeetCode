function findLengthOfLCIS(nums: number[]): number {
    
    let count = 1, max = 1;

    for(let i=1; i<nums.length; i++) {
        if(nums[i] > nums[i-1]) count++;
        else count = 1;
        max = Math.max(max, count)
    }

    return max;
};