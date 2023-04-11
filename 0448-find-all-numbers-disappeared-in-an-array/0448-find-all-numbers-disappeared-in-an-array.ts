function findDisappearedNumbers(nums: number[]): number[] {
  let res = [];
  for (let i=0; i<nums.length; i++) {
      let num = Math.abs(nums[i]);
      nums[num-1] = Math.abs(nums[num-1]) * -1;
  }
  for (let i=0; i<nums.length; i++) {
      if (nums[i] > 0) res.push(i+1);
  }
  return res;
};