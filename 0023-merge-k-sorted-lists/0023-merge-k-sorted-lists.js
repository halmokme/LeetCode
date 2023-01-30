/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
    let arr = [];
    for(let i=0; i<lists.length; i++) {
        while(lists[i]) {
            arr.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    
    arr.sort((a, b) => b - a);
    
    let result = new ListNode(0);
    let tmp = result;
    while(arr.length > 0) {
        tmp.next = new ListNode(arr.pop());
        tmp = tmp.next;
    }
    
    return result.next;
};