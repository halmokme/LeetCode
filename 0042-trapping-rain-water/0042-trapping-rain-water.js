/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    let result = 0;
    let left = 0, right = height.length - 1;
    let leftMax = height[left], rightMax = height[right];

    while(right > left) {
        leftMax = Math.max(height[left], leftMax);
        rightMax = Math.max(height[right], rightMax);
        if(rightMax >= leftMax) {
            result += leftMax - height[left];
            left++;
        } else {
            result += rightMax - height[right];
            right--;
        }
    }
    return result;
};
