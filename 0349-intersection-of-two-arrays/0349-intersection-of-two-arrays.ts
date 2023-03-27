function intersection(nums1: number[], nums2: number[]): number[] {
    const num1 = new Set(nums1);
    const num2 = new Set(nums2);
    const intersect = new Set([...num1].filter(el => num2.has(el)));
    return [...intersect];
}