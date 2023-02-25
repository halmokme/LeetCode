### 그리디
​
배열이 주어지면 최대 원소의 값만큼 내부에서 점프할 수 있는데, 베열의 끝에 도달할 수 있는 최소 점프수를 구하는 문제. <br/>  그냥 원소의 값만큼 이동하는게 아니라, 최대 원소의 값만큼 이동할 수 있어서 난이도가 높았다. 예를들어 [2,3,1,1,4]가 있다면 각각의 값만큼 2 -> 1 -> 1-> 4로 네번 이동하는게 아니라, 첫번째 인덱스에서 최대 2만큼 움직일 수 있으니 1만큼 움직이고, 그 다음 인덱스에서 3만큼 이동하게되면 두번만에 배열의 끝에 도달할 수 있다. <br/>
​
위의 예시가 움직이는 방식을 보면 첫번째 인덱스에서 2칸을 이동할 수 있음에도 3의 값을 가진 두번째 인덱스로 가기 위해 1칸만큼 이동한 걸 볼 수 있는데, 결국 최소로 이동한다는건 결국 가장 멀리 갈 수 있는 최대의 칸을 찾아야 한다는 말이 된다. <br/>
현재 인덱스를 기준으로 그 인덱스가 이동할 수 있는 범위 내에서 최대의 값을 찾아 그만큼 이동해주면, 각각의 선택 중에서 최대의 해를 구해주면 그게 전체 최적의 해가 된다. 그리디 방식이라는걸 이해만 할 수 있다면 구현은 쉽다