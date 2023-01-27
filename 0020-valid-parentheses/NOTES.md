### 구현
​
괄호의 유효성을 검사하는 문제. 괄호가 유효하려면 열린 만큼 같은 쌍으로 닫혀야한다. 또 열린 순서대로 같은 쌍으로 닫혀야 한다. 하나의 쌍이라는 점에서 힌트를 얻어 스택을 이용해 값을 넣어주고 빼면 쉽게 풀 수 있다.
주어진 문자열 s를 돌며 차례로 검사하되 열린 괄호라면 스택에 넣어주고, 닫힌 괄호라면 스택에 있는 마지막 원소의 열린 괄호와 쌍이 일치하다면 스택에서 값을 빼준다. 최종적으로 스택이 비어있다면 괄호가 유효하다는 뜻이라 true를 리턴해주면 된다.
그리고 brackets 객체의 키값 존재여부를 찾기 위해 key in Object를 사용하였는데 생각보다 속도가 많이 느렸다. 성능이 처참해서 Object.keys + include 방식으로 바꿔 풀었다