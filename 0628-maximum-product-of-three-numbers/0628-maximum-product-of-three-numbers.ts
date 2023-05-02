function maximumProduct(nums: number[]): number {

    nums.sort((a, b) => a - b);
    let negative = nums[0] * nums[1] * nums[nums.length - 1];
    let positive = nums[nums.length-3] * nums[nums.length-2] * nums[nums.length-1];
    return Math.max(negative, positive);
};