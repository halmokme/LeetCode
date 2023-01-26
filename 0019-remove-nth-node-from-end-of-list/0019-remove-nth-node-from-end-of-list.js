/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    let po1 = head;
    let po2 = head;

    for(let i=0; i<n; i++) po1 = po1.next;

    if(po1 === null) return head.next;
    
    while(po1.next !== null) {
        po1 = po1.next;
        po2 = po2.next;
    }
    po2.next = po2.next.next;
    return head;
};