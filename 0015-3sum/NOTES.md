### 구현
​
배열이 주어졌을때 3개의 원소 합이 0이 되는 모든 원소를 리턴해주되 중복된 셋이 있으면 안된다
​
예를 들어 n = [-1, 0, 1, 2, -1, -4]가 주어졌을 때
[-1, -1, 2], [-1, 2, -1] 두 배열 모두 -1이 두개고 2가 하나인 중복된 셋이다.
반복루프를 돌며 구현하되 중복된 셋은 정렬을 이용하면 연산을 줄일 수 있다.
​
```
const threeSum = function(nums) {
let result = [];
for(let i=0; i<nums.length-2; i++) {
for(let j=i+1; j<nums.length-1; j++) {
for(let k=j+1; k<nums.length; k++) {
if(nums[i] + nums[j] + nums[k] === 0) {
let arr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
let isDup = false;
for(const el of result) {
if(el[0] === arr[0] && el[1] === arr[1] && el[2] === arr[2]) {
isDup = true;
break;
}
}
if(!isDup) result.push(arr);
}
}
}
}
return result;
};
```
​
하지만 이렇게 풀면 테스트케이스는 통과하지만 시간초과에 걸린다. 알고리즘 문제에서 보통 n세제곱 이상의 시간복잡도는 실패하므로 효율적인 알고리즘을 찾아야 한다.
​
이 문제는 투포인터 알고리즘을 이용하여 풀 수 있다. 원소가 세개라 세개의 포인터가 필요한데 투포인터로 구현하기 위해서는 하나의 반복문안에서 포인터를 두개 두면 된다.
포인터를 움직이는 방식은 배열의 합이 0인 원소를 리턴해주는 문제이므로 합이 0에 가까워지게 만들어야 한다.
그러기 위해 배열을 정렬한 뒤 좌우 포인터를 끝점부터 이동하며 세 수의 합이 0보다 작다면 왼쪽 포인터를, 0보다 크다면 오른쪽 포인터를 움직여주면 된다.
그리고 포인터가 가리키는 값이 이전 인덱스와 같은 값일때 그 값을 건너뛰면 중복처리가 자연히 된다.
예를들어 a=[-2,-1,-1,0,1]라면, 포인터가 a[1]를 한번 검사했으니 a[2]는 검사해주지 않고 건너뛰는 방식이다(둘 다 값이 -1이므로). 코드로 나타내면 다음과 같다.
​
```
const threeSum = function(nums) {
let result = [];
let n = nums.sort((a, b) => a - b);
else if(sum < 0) left++;