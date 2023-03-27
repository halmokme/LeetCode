function reverseVowels(s: string): string {
    let arr = s.split('');
    let left = 0, right = s.length - 1;
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let findLeft = false, findRight = false;
    while(right > left) {
        if(vowel.indexOf(arr[left]) > -1) {
            findLeft = true;
        } else {
            left++;
            findLeft = false;
        }
        if(vowel.indexOf(arr[right]) > -1) {
            findRight = true;
        } else {
            right--;
            findRight = false;
        }
        if(findLeft && findRight) {
            let tmp = s[left];
            arr[left] = s[right];
            arr[right] = tmp;
            left++;
            right--;
        }
    }
    return arr.join('');
};