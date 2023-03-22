### 구현
​
패턴이 맞는지를 검사하는 문제. <br/>
문제 이해가 어려워서 한참을 고민했는데 문자열 s가 띄어쓰기를 기준으로 패턴을 따르는지를 검사하는 문제이다. <br/>
가령 abba라는 패턴이 주어졌고 검사할 문자열이 'dog cat cat dog'이라면 dog(a) cat(b) cat(b) dog(a)이므로 true이고 <br/>
검사할 문제열이 'dog cat cat fish'라면 dog(a) cat(b) cat(b) fish(c)이므로 false가 된다<br/>
​
문제를 이해만 한다면 객체를 이용해 어렵지 않게 풀 수 있다