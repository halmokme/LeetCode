### 구현

배열 원소에서 누락된 가장 작은 양수를 구하는 문제.  
[1,1,2]가 주어졌다면 3을, [3,3,1,1,5]가 주어졌다면 2를, [-1,-4,1,1]이 주어졌다면 2를 리턴해주면 된다.  
일반적인 방식으로 풀면 O(logn)의 시간복잡도와 O(n)의 공간복잡도를 가지게 되는데, 문제에서는 O(n)의 시간복잡도와 O(1)의 공간복잡도로 풀 것을 권장하고 있다  

<br/>


1. 일반적인 방식(중복 제거 후 양의 정수만 배열에 남긴 뒤 순차적으로 탐색)
```
const firstMissingPositive = function(nums) {
    let arr = [... new Set(nums)];
    arr = arr.sort((a, b) => a - b).filter(el => el > 0);
    
    for (let i = 0; i < arr.length; i++) {
        if (i+1 == arr[i]) continue;
        else return i+1;
    }
    
    return arr.length + 1;
};
```

<br/>

2. 정답
```
const firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let idx = nums[i]-1;
        if (i === idx || nums[i] === nums[idx]) continue;
        if (idx >= 0 && idx <= nums.length - 1) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            i--;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i+1 === nums[i]) continue;
        else return i+1;
    }
    
    return nums.length + 1;
};

```

1번 풀이에서 중복과 음수를 없애고 배열을 오름차순으로 정렬했다면, 위 코드에서는 배열을 정렬하되 중복과 음수를 배열의 맨 끝으로 보내버린다.  
코드를 보고 대단하다고 느꼈는데 두개의 조건문을 통해 값을 찾아 계속 끌어온다.  
[1,1,4,-1,3,2] -> [1,1,-1,4,3,2] -> [1,1,3,4,-1,2] -> [1,2,3,4,-1,1] 이런 식이다. 
정렬한 뒤에 인덱스+1의 값과 다른 부분을 리턴해주면 누락된 양수값을 얻을 수 있다
