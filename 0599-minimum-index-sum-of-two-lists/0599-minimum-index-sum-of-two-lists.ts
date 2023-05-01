function findRestaurant(list1: string[], list2: string[]): string[] {

    let map = {};
    for(let index in list1) {
        map[list1[index]] = Number(index);
    }

    let arr = [];
    for(let index in list2){
        if(typeof map[list2[index]] !== 'undefined'){
            arr.push([list2[index], map[list2[index]]+Number(index)]);
        }
    }
    
    return arr.sort((a,b) => (a[1] <= b[1]) ? -1 : 1).filter(x => x[1] == arr[0][1]).map(x => x[0])
};