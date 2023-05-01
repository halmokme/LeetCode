function findRestaurant(list1: string[], list2: string[]): string[] {

    let res = [];
    let obj = new Map();
    list2.forEach((v, i) => obj.set(v, i));
    
    let i = 0, min = Infinity;
    while(i < list1.length){
        if(obj.has(list1[i])){
            let sum = i + obj.get(list1[i]);
            if(min === sum){
                res.push(list1[i]);
            }   
            else if(sum < min){
                res = [list1[i]];
                min = sum;
            }
        }
        i++;
    }
    
    return res;
};