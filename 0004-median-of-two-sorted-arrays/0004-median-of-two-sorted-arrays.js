/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1, ...nums2].sort((a, b) => a - b);
    if(newArr.length % 2) {
        return newArr[newArr.length / 2 - 0.5];
    } else {
        return (newArr[newArr.length / 2 - 1] + newArr[newArr.length / 2]) / 2
    }
};