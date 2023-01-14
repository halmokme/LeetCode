### 구현  

<br/>
   
주어진 문자열을 주어진 행 수에 맞춰 ㅣ/ㅣ/ㅣ/ㅣ 같이 지그재그 패턴으로 쓴 뒤 행으로 출력하는 문제  

규칙을 찾으면 되는데 규칙이 행마다 다르고, numRows의 값에 따라서도 달라져서 복잡하다.  


예를들어 문자열 "PAYPALISHIRING"와 numRows 4가 주어졌을때 패턴은 다음과 같은 형태가 된다  
P　　　　 I　　　　N   
A　　 L　S　　 I　 G   
Y　A　　 H　R     
P　　　　 I       

첫번째 행에 있는 문자열 P,I,N을 주어진 문자열 "PAYPALISHIRING"에서 찾아보면 6개의 간격마다 위치한다.  
두번째 행의 문자열 A,L,S,I,G는 4,2,4,2의 간격으로 위치해있다.  
세번째 행의 문자열 Y,A,H,R은 2,4,2,4의 간격으로  
마지막 행의 문자열 P,I는 6개의 간격으로 위치해있다.  

이를 배열로 나타내보면 [6,0] [4,2] [2,4] [0,6]  
numRows가 5라면 [8,0] [6,2] [4,4] [2,6] [0,8]  
여기서 규칙이 보이는데 첫행과 마지막 행의 간격은 (numRows-1)x2 라는 식을 세울 수 있다

 
중간 행들은  
numRows가 3일때 [2,2]  
numRows가 4일때 [4,2] [2,4]  
numRows가 5일때 [6,2] [4,4] [2,6]  
첫행의 간격인 (numRows-1)x2를 기준으로 배열의 왼쪽 값은 2씩 감소, 오른쪽 값은 0에서 2씩 증가하는 형태이다.


코드로 나타내면 다음과 같다.

```
const convert = function(s, numRows) {
    let space1 = (numRows - 1) * 2, space2 = space1, space3 = 0;
    let result = '';
    
    if(numRows === 1) return s;
    
    // 첫번째 행
    for(let i=0; i<s.length; i+=space1) {
        result += s[i];
    }
    
    // 중간 행
    for(let j=1; j<numRows-1; j++) {
        space2 -= 2;
        space3 += 2;
        toggle = true;
        for(let i=j; i<s.length;) {
            result += s[i];
            if(toggle) i += space2;
            else i += space3
            toggle = !toggle;
        }
    }
    
    // 마지막 행
    for(let i=numRows-1; i<s.length; i+=space1) {
        result += s[i];
    }
    
    return result;
};
```

<br/>

discuss 탭에 가면 더 좋은 풀이들이 많다. 난 규칙을 발견한 뒤에 단순히 절차대로 구현할 생각을 하는데 코드를 잘 쓰는 사람들은 항상 구현할 때도 절차를 압축?하고 꼬아서 조금 더 성능면에서 좋은 코드를 작성한다. 배울점이 많아 더 좋은 Solution을 자주 접하고 공부해야겠다 
