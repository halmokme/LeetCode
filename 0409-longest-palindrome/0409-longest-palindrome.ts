function longestPalindrome(s: string): number {
    
    let dic = {};
    for(let i=0; i<s.length; i++) {
        if(dic[s[i]]) dic[s[i]]++;
        else dic[s[i]] = 1;
    }

    let res = 0, odd = false;
    for(let char in dic) {
        if(dic[char] % 2 > 0) odd = true;
        res += Math.floor(dic[char] / 2) * 2
    }
    return odd ? res+1 : res;
};

