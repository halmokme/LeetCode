/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
    if(head === null || head.next === null) return head;
    
    let tmp = head.next;
    head.next = tmp.next;
    tmp.next = head;
    head.next = swapPairs(head.next);
    
    return tmp;
};