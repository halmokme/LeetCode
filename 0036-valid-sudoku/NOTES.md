### 구현

주어진 이차원 배열이 스도쿠 규칙을 만족하는지 검사하는 문제.  
스도쿠의 칸은 총 3x3칸 9개로 총 81칸으로 이루어져 있으며, 각각의 가로줄과 세로줄에 1부터 9까지의 숫자가 중복없이 하나씩 들어가며 3×3칸(box) 안에또한 1~9가 중복 없이 하나씩 들어간다  

<br/>

최종 유효여부를 판단하기 위해 중복을 제거해 원본배열과의 길이를 비교하는 isValidNum 함수를 만들었고 
```
const isValidNum = (arr) => {
    const nums = arr.filter(el => el !== '.');
    const set = new Set(nums);
    return set.size === nums.length;
}
```

<br />

isValidNum 함수로 유효성을 검사하기 위해 열과 대각(3x3)을 행의 형태로 배열묶음으로 만들었다. (행은 주어진 isValidNum 함수를 그대로 이용하면 된다)  
```
// 열
const boardCol = (arr) => {
    return arr[0].map((el, i) => {
        return arr.map(el2 => el2[i]);
    })
}

// 대각
const boardMatrix = (arr) => {
    const sq = [[], [], [], [], [], [], [], [], []];
    arr.forEach((el, i) => {
        el.forEach((el2, i2) => {
            const sqIdx = (Math.floor(i / 3) * 3) + (Math.floor(i2 / 3));
            sq[sqIdx].push(el2);
        })
    })
    return sq;
}
```
대각선을 행의 형태의 배열묶음으로 만드는 부분은 머리가 안돌아가 레퍼런스를 보고 참고하였다 ```(Math.floor(i / 3) * 3) + (Math.floor(i2 / 3));```
