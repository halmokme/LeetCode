/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0, right = s.length - 1;
    
    while(right > left) {
        let tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
        left++;
        right--;
    }
};