function thirdMax(nums: number[]): number {
    const setVal = [...new Set(nums.sort((a, b) => b - a))]

    if (setVal[2] || setVal[2] == 0) return setVal[2];
    else return setVal[0];
};