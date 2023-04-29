function findLHS(nums: number[]): number {
    
    let res = 0;
    const lhs = {};

    for(let num of nums) {
        lhs[num] = lhs[num]+1 || 1;
    }

    for(let i=0; i<nums.length; i++) {
        if(lhs[nums[i]+1]) res = Math.max(res, lhs[nums[i]]+lhs[nums[i]+1]);
    }

    return res;
};