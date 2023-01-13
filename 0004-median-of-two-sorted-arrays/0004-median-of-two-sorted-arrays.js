/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    let x = nums1.length;
    let y = nums2.length;
    
    let low = 0;
    let high = x;
    while(low <= high) {
        let partitionX = parseInt((low + high) / 2);
        let partitionY = parseInt((x + y + 1) / 2) - partitionX;
        
        let maxLeftX = partitionX === 0 ? - Infinity : nums1[partitionX - 1];
        let minRightX = partitionX === x ? Infinity : nums1[partitionX];
        
        let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        let minRightY = partitionY === y ? Infinity : nums2[partitionY];
        
        if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
            return (x + y) % 2 !== 0 ? Math.max(maxLeftX, maxLeftY) : ((Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2);
        } else if (maxLeftX > minRightY) high = partitionX-1;
        else low = partitionX+1
    }
};