function findErrorNums(nums: number[]): number[] {
    nums.sort((a, b) => a - b);

    let duplicate = -1, missing = 1;

    for(let i=1; i<nums.length; i++) {
        if(nums[i] === nums[i-1]) duplicate = nums[i]
        if(nums[i] > nums[i-1]+1) missing = nums[i-1]+1;
    }

    if(nums[nums.length-1] === nums.length-1) missing = nums.length;

    return [duplicate, missing];
};