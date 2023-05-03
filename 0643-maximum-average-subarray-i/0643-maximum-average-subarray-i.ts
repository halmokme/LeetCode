function findMaxAverage(nums: number[], k: number): number {
  
  let currSum = 0;
  for(let i=0; i<k; i++) {
      currSum += nums[i];
  }

  let maxSum = currSum, left = 0;
  for(let i=k; i<nums.length; i++) {
      currSum -= nums[left++];
      currSum += nums[i];
      if(currSum > maxSum) maxSum = currSum;
  }

  return maxSum / k;
};