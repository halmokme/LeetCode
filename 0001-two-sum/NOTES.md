### Brute Force

브루트포스 방식으로 탐색하면 n제곱의 시간 복잡도로 간단하게 풀 수 있다. 이보다 좋은 풀이가 있을까 싶었는데 있었다.  
추천수 만칠천개에 육박하는 고수의 풀이는 다음과 같다

```
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};
```

map 객체를 사용한 memoization 방식인데 굉장히 효율적이다.  
map에 보충해야 할 key값을 저장해두었다가 그대로 활용함으로써 시간복잡도를 최소화한다. 즉 특정 값을 map에 기억함으로써 루프 하나를 줄였고 N(O(1)+O(1)), O(n)의 시간 복잡도가 발생한다.  
다만 공간복잡도의 경우에 또하나의 객체를 만들기 때문에 O(n)이다
