### 구현

문자열 s와 배열words가 주어질 때, 배열 words의 원소들로 만들 수 있는 모든 단어를 포함하는 부분집합의 원소를 모두 찾는 문제. 

처음 생각한 방법은 words 배열의 문자열을 전부 합친 뒤, indexOf를 사용하여 위치를 반환해주는 방식이었다

1. words 배열의 원소로 만들 수 있는 모든 문자열을 wordsSum 배열에 담고(순열 알고리즘)
2. wordsSum의 원소들이 s에 존재하는지 검사(indexOf 사용 + 중복위치 모두 찾아내기)
3. 위치들 result 배열에 전부 담고 리턴



코드로 나타내면 다음과 같다



```
const findSubstring = function(s, words) {

    // 1
    const getPermutations= function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((value) => [value]);
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
            const permutations = getPermutations(rest, selectNumber - 1);
            const attached = permutations.map((permutation) => [fixed, ...permutation]); 
            results.push(...attached);
        });
        return results;
    };
    let wordsSum = getPermutations(words, words.length).map(el => el.join(''));

    // 2, 3
    let result = [];
    for(let i=0; i<wordsSum.length; i++) {
        let idx = s.indexOf(wordsSum[i]);
        while(idx !== -1) {
            result.push(idx);
            idx = s.indexOf(wordsSum[i], idx+wordsSum.length-1);
        }
    }

    return [... new Set(result)];
};

```




시간제한 걸릴일이 없는데 하고 봤더니 메모리 문제였다. 순열 알고리즘을 재귀로 돌리는 만큼 다음과 같은 케이스를 만나면 힙메모리가 부족해져 더이상 동적으로 메모리를 할당할 수 없다.

s = "pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel"

words = ["dhvf","sind","ffsl","yekr","zwzq","kpeo","cila","tfty","modg","ztjg","ybty","heqg","cpwo","gdcj","lnle","sefg","vimw","bxcb"]


이외의 방법은 생각나지 않아서 레퍼런스를 참고했는데 hard문제는 확실히 어렵다  

참고 : https://leet-codes.blogspot.com/2022/10/substring-with-concatenation-of-all.html  

 
