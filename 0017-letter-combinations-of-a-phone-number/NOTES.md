### 백트래킹
​
​
전화기의 숫자 위치에 있는 문자들의 가능한 모든 조합을 출력하는 문제.
​
보자마자 재귀라는건 알았는데 계속 막히는 부분이 생겨서 솔루션을 참고했더니 단순 재귀라기보다는 백트래킹을 이용한 순열 알고리즘 문제다.
백트래킹은 탐색전략으로 DFS나 재귀를 이용해 특정한 조건을 만족하는 경우만 살펴보는 기법을 말한다. 모든 경우의 수를 탐색하는 과정에서 조건문 등을 걸어 답이 절대로 될 수 없는 상황을 정의하고, 그러한 상황인 경우 탐색을 중지시킨 뒤 이전으로 돌아가서 다시 다른 경우를 탐색하게끔 구현하는 방식이다. 백트래킹 기법에서 가장 중요한 것은 유망성인데, 유망성을 따져보고 그에따라 얼마나 가지치기를 잘하느냐가 핵심이라고 한다.
​
​
```
const letterCombinations = function(digits) {
if(digits.length === 0) return [];
const map = {
2: ['a', 'b', 'c'],
3: ['d', 'e', 'f'],
4: ['g', 'h', 'i'],
5: ['j', 'k', 'l'],
6: ['m', 'n', 'o'],
7: ['p', 'q', 'r', 's'],
8: ['t', 'u', 'v'],
9: ['w', 'x', 'y', 'z'],
}
const result = [];
const recursive = (el, idx) => {
if(idx === digits.length) {
result.push(el);
return;
}
for(let i=0; i<map[digits[idx]].length; i++) {
recursive(el + map[digits[idx]][i], idx+1);
}
}
recursive('', 0);
return result;
};
```
​
if(idx === digits.length)의 조건문이 이 문제의 핵심이다. 이 조건이 성립된다는 것은 하나의 조합을 만들었다는 뜻이고 이에 유념하여 주어진 digits의 문자들을 트래킹하면 된다
백트래킹이니 순열이니 용어가 어려운데, 까다로운 재귀 문제라고 생각해도 될거같다.