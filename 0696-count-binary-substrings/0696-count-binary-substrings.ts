function countBinarySubstrings(s: string): number {
    let res = 0;

    for (let i=0; i<s.length-1; i++) {
        if (s[i] !== s[i+1]) {
            let left = i, right = i + 1;
            while (s[left] === s[i] && s[right] === s[i+1]) {
                res++;
                left--;
                right++;
            }
        }
    }

    return res;
};