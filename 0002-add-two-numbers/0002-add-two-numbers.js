/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let link = result;
    let l1num='';
    let l2num='';
    let sumArr;
    while(l1){
        l1num += l1.val;
        l1 = l1.next;
    }
    while(l2){
        l2num += l2.val;
        l2 = l2.next;
    }
    l1num = l1num.split('').reverse().join('');
    l2num = l2num.split('').reverse().join('');
    sumArr = (BigInt(l1num) + BigInt(l2num)).toString().split('').reverse();
    sumArr.map(el => {
        link.next = new ListNode(Number(el));
        link = link.next;
    })
    return result.next
};