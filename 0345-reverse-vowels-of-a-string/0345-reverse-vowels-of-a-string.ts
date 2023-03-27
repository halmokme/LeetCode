function reverseVowels(s: string): string {
    
    let arr = s.split('');
    let left = 0, right = s.length - 1;
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    while(right > left) {
        if(vowel.indexOf(arr[left]) === -1) left++;
        if(vowel.indexOf(arr[right]) === -1) right--;
        if(vowel.indexOf(arr[left]) > -1 && vowel.indexOf(arr[right]) > -1 ) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};