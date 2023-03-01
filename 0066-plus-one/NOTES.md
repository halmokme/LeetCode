### 구현
​
일반 구현 문제인데, BigInt 객체끼리 연산이 가능하다는 것만 알면 다음과같이 원라인으로도 풀 수 있다 <br/>
```return ((BigInt(digits.join('')) + BigInt(1))+'').split('').map(el => +el)```