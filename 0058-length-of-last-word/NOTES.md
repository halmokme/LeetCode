### 구현
​
문자열 s가 주어지면 공백이 아닌 마지막 단어의 길이를 반환하는 문제. <br/>
배열로 만든 뒤에 문자열로만 필터링하고 마지막 원소의 길이를 구하는 정석적인 방법으로 풀었는데 <br/> ```return s.split(' ').filter(el => el+'').at(-1).length;``` <br/> 레퍼런스를 보니 배열로 바꾸지 않고 푸는 방법도 있었다. <br/>
​
문자열의 전체 길이(a)에서 마지막 원소의 앞의 index(b)를 구해 빼주는 방식이다. 공백을 기준으로 lastIndexOf를 사용하면 b값이 나오는데, 문자열 제일 끝에 공백이 있을 수도 있으므로 먼저 trim 메서드를 사용해 문자열 끝의 공백을 제거해주었다. <br/> ```return s.trim().length - (s.trim().lastIndexOf(' ') + 1)```