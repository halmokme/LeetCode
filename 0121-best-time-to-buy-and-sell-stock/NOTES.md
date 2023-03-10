### 구현
​
주식 매수 매도 문제. 날짜별 주식 가격이 주어질때 얻을 수 있는 최대 이익을 구해야 한다<br/>
배열의 원소가 날짜를 뜻하기 때문에 단순히 배열의 최솟값, 최댓값을 구해서는 풀 수 없다. 예를 들어 [2,4,2,1]이 주어졌다면 최솟값인 1에서 사고 최댓값인 4에서 팔 수는 없다. 1은 넷째날의 가격이고 4가 둘째날의 가격이므로 성립이 안되고, 무조건 이윤을 내야하기 때문에 1에서 멈춰있을 수도 없다. <br/>
그렇다고 브루트포스 방식으로 풀면 시간초과가 뜨므로 조금 머리를 굴려서 필요 없는 부분을 쳐내야 한다. 연산을 줄이기 위해서는 하나의 규칙을 이용하면 되는데 n번째 날에 구매하면 n+1번째 날부터 가격을 보면 된다. 즉 배열의 세번째 원소에서 구매했다면 1,2번째 원소와는 연산을 할 필요가 없다.<br/>
이 규칙을 이용하여 배열을 차례로 오른쪽으로 이동하며 최소값을 구하고 각 원소와의 차익을 구해 최대값을 갱신해주면 된다.