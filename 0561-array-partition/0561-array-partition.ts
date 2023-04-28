function arrayPairSum(nums: number[]): number {
    let res = 0;

    nums.sort((a, b) => a - b);
    for(let i=0; i<nums.length; i+=2) {
        res += nums[i];    
    }

    return res;
};