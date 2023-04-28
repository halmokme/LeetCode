function arrayPairSum(nums: number[]): number {
    return nums.sort((a, b) => a - b)
    .reduce((acc, val, idx) => acc + (idx % 2 === 0 && val), 0);
};