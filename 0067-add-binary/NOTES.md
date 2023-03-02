### 구현
​
진수변환문제<br/>
​
자바스크립트에서의 진수변환은 parseInt와 toString 두가지 메서드만 알면 된다. 이 두개로 전부 응용이 가능하다. <br/>
십진수 -> 다른 진수로 변환 시킬때는 toString <br/>
다른 진수 -> 십진수로 변환시킬때는 parseInt <br/>
​
문제에서 주어진 2진수 형태의 문자열을 parseInt(n, 2)로 10진수로 만들어준뒤에 더하고, 다시 toString으로 이진수로 만들어주면 되는데, parseInt는 정수의 범위를 넘어선 연산을 하지 못하므로 대신 BigInt를 사용한다<br/>
​
BigInt는 2진수 0b, 8진수 0o 등의 형태로 표현하므로 정답은 ```    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)``` 가 된다
​