### 구현

문자열을 숫자로 변환하는 문제인데 조건이 많다.

1. 공백 무시   ex) '  42  ' -> 42,  
2. 문자가 아닌 숫자만 추출  ex) '4193 with words' -> 4193
3. 문자열이 먼저 오는 경우 문자열은 제외  ex) 'word 4193' -> 0
4. 0이 먼저 오는 경우도 제외  ex) '0032' -> 32
5. 정수범위 [-2**31, 2**31 - 1]를 벗어나면 범위 최대값을 출력

1,2,4번 조건은 parseInt를 사용하면 해결이 가능하므로 3번, 5번 조건만 판단해주면 된다.
문제가 친절하지 않아서 조건 생각을 잘해야 하며 게시판을 보니 미디엄 문제 치고 전체적으로 쉽다고 느끼는 거 같다
