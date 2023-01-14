### DP

가장 긴 팰린드롬 찾기. 얼핏 보면 간단해보이지만 개인적으로 상당히 까다로웠다


1. 주어진 문자열의 부분 문자열을 구한다
2. 부분 문자열의 팰린드롬 여부를 검사한다
3. 가장 긴 팰린드롬 값을 가진 부분문자열을 출력한다
2번 과정이 이 문제의 핵심이다

처음 생각했던 방법은 바깥에서 안으로 좁혀들어오며 검사해주자였다.  
펠린드롬이란 거꾸로 읽어도 같은 문자열을 의미하므로 시작과 끝 값이 같다. 예로 ababa는 펠린드롬이며 시작값 a와 끝값 a가 일치한다. 이 특징을 이용해 문자열의 시작과 끝 인덱스를 각각 변수로 지정해주어 두 값이 같다면 두 변수의 범위를 하나씩 좁히며 검사해나가는 방식을 생각했다.  
좁히다보면 left와 right 변수는 중간 지점에서 만나게 되는데 문자열의 길이가 홀수라면 두 변수는 같은 인덱스를 가리키고, 짝수라면 두 변수는 교차되어 right > left의 인덱스값이 성립된다.  
  
  
풀이  
```
const longestPalindrome = function(s) {
    let maxLength = 0;
    let maxStr = '';
    
    if (s.length === 1) return s;
    
    for (let i=0; i<s.length; i++) {
        for (let j=i; j<s.length; j++) {
            let palindrome = true;
            let len = j-i+1;
            let left = i;
            let right = j;
            while(left < right) {
                if(s.charAt(left) !== s.charAt(right)) {
                    palindrome = false;
                    break;
                }
                left++;
                right--;
            }
            if(palindrome && maxLength < len) {
                maxLength = len;
                maxStr = s.substring(i, j+1);
            }
        }
    }
    return maxStr;
};
```

테스트는 통과했지만 출제 의도인 DP를 이용해 더 효율적인 알고리즘을 구현할 수 있다. 예로 babad의 부분문자열 중 aba는 펠린드롬이므로 한번 검사했으면 그 뒤부터는 중복해서 계속 검사할 필요가 없다. 

  
   
아래 해답은 다른 사람의 풀이를 참고했다

```
const longestPalindrome = function(s) {
    let dp = Array.from(Array(s.length), () => new Array(s.length));
    let maxStr = '';
    
	if(s.length === 1) return s;
	
    for(let i=0; i<s.length; i++) {
        dp[i][i] = true;
        maxStr = s[i];
    }
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === s[i+1]) dp[i][i+1] = true;
        if(dp[i][i+1]) maxStr = s.substring(i, i+2);
    }

    for(let i=s.length-1; i>=0; i--) {
        for(let j=i+2; j<s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) maxStr = maxStr.length < (j-i+1) ? s.substring(i,j+1) : maxStr;
        }
    }
    
    return maxStr;
}
```
