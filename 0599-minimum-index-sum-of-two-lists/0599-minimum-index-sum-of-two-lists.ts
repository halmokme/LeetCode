function findRestaurant(list1: string[], list2: string[]): string[] {
    let arr = [];
    for (let i=0; i<list1.length; i++) {
        for (let j=0; j<list2.length; j++) {
            if (list1[i] === list2[j]) arr.push([list1[i], (i + j)])
        }
    }

    let res = [], min = arr.sort((a, b) => a[1] - b[1])[0][1];
    for(let i=0; i<arr.length; i++) {
        if(arr[i][1] === min) res.push(arr[i][0])
    }

    return res;
};