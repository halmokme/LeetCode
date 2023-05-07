function validPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1;

    while(right > left) {
        if(s[left] === s[right]) {
            left++;
            right--;
        } else {
            return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
        }
    }
    return true;
};

function isPalindrome(s: string, left: number, right: number): boolean {
    while(right > left) {
        if(s[left] !== s[right]) return false;
        left++
        right--;
    }
    return true;
}