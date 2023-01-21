### 구현
​
가장 긴 공통 접두사를 찾는 문제.
​
문제 자체가 단순구현이라 어렵지 않은데 왜 구글 기출일까 생각해서 찾아보니 천재적인 풀이가 있었다
​
마지막 글자를 지워나가는 방식으로 구현하면 훨씬 빠르게 풀 수 있다.
​
```
const longestCommonPrefix = function(strs) {
let prefix = strs[0];
for (let word of strs) {
while (word.indexOf(prefix) != 0) {
prefix = prefix.substring(0, prefix.length - 1);
}
}
return prefix;
};
```
​
속도, 메모리 사용량 모두 90%가 넘는다.
indexOf는 나도 생각할 수 있겠는데 했는데 중요한건 indexOf가 아니라 글자를 끝에서부터 지워나가는 방식이다.