### 탐색


x축이 i고 y축이 ai인 그래프가 주어졌을 때 가장 많은 물을 담을 수 있는 x축의 두개의 선을 찾아 그 크기를 구하는 문제


문제에서 주어진 예시를 보면 height = [1, 8, 6, 2, 5, 4, 8, 3, 7]이 주어졌을때 최대 크기는 49인데

height[1] ~ height[8] 까지 길이가 7이고, height[1],height[8]중 더 작은 값인 7 두개를 곱하면 최대크기가 된다. 7x7=49

반복문을 이용해 완전 탐색을 이용하면 문제 자체는 쉽다.

```
const maxArea = function(height) {
    let maxSize = 0;
    for(let i=0; i<height.length-1; i++) {
        for(let j=i+1; j<height.length; j++) {
            size = Math.min(height[i], height[j]) * (j-i);
            maxSize = Math.max(size, maxSize);
        }
    }
    return maxSize;
};
```

하지만 이렇게 풀면 시간초과로 통과를 못한다.  
위의 코드대로 순회하면 시간복잡도가 n제곱이 되는데, 이 문제가 medium인 이유는 시간을 줄이기 위한 효율적인 탐색방법을 생각해봐야 하기 때문인 거 같다.  

속도를 개선하기 위해 팰린드롬 문제에서 풀었던 것처럼 좌우 포인터 방식을 이용한다.  
왼쪽에서 오른쪽으로 이동하는 left, 오른쪽에서 왼쪽으로 이동하는 right 포인터 둘을 움직여가며 넓이값을 계산하되 포인터는 단순히 한칸씩 이동하는게 아니라 최대 크기를 구하는 문제인만큼 더 큰 값이 나올것을 생각하며 움직여야 한다.  
즉 height[left]와 height[right] 중 값이 더 작은 포인터를 움직이면서 순회하면 된다.

```
const maxArea = function(height) {
    let size = 0, maxSize = 0;
    let left = 0, right = height.length-1;
    while(right > left) {
        size = Math.min(height[left], height[right]) * (right - left);
        maxSize = Math.max(size, maxSize);
        if(height[left] > height[right]) right--;
        else left++;
    }
    return maxSize; 
};
```
