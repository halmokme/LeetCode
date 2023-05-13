function search(nums: number[], target: number): number {
    
    // return nums.indexOf(target);

    let left = 0, right = nums.length - 1, mid;
    
    while(right >= left) {
        mid = Math.floor((left + right) / 2);
        if(target === nums[mid]) return mid;
        if(target > nums[mid]) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
};