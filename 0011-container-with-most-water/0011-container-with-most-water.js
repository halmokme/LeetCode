
const maxArea = function(height) {
    let size = 0, maxSize = 0;
    let left = 0, right = height.length-1;
    while(right > left) {
        size = Math.min(height[left], height[right]) * (right - left);
        maxSize = Math.max(size, maxSize);
        if(height[left] > height[right]) right--;
        else left++;
    }
    return maxSize;
};