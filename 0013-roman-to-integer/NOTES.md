### 구현
​
로마 숫자를 숫자로 변환하는 문제
​
12번 문제의 반대 버전인데 역시 예외처리를 해주어야 한다. 로마숫자는 왼쪽에서 오른쪽으로 큰수부터 작은숫자 순으로 표기되지만 예외처리는 표기 순서가 반대가 된다.
​
예를들어 900은 CM으로 표기되는데 이 C가 100을 의미하는지 예외숫자인 CM에서의 C인지를 체크해줘야 한다. C다음에 나올 로마숫자가 무엇인지를 알아야 한다는 뜻이다.
​
C다음에 M이 나온다면 100 + 800, C다음에 D가 나온다면 100 + 300 이런 식으로 n개의 예외처리를 하며 구현하면 어렵지않다