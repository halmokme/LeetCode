function longestPalindrome(s: string): number {
    
    let dic = {};
    for(let char of s) {
        if(dic[char]) dic[char]++;
        else dic[char] = 1;
    }

    let res = 0
    let isOdd = false;
    for(let char in dic) {
        if(dic[char] % 2 > 0) isOdd = true;
        res += Math.floor(dic[char] / 2) * 2
    }
    return isOdd ? res+1 : res;
};

