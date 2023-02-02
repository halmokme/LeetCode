/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
const reverseKGroup = function(head, k) {
    let count = 0;
    let node = head;

    while (node){
        count++;
        node = node.next;
    }

    let reversFn = function (rHead,count) {
        let head = rHead;
        let tail = rHead;
        while (1 < count--) {
            let postHead = tail.next;
            tail.next = postHead.next;
            postHead.next = head;
            head = postHead;
        }
        return [head,tail];

    };

    let resultHead;
    let tTail = head;
    let preTail = null;

    while (0 <= count - k) {
        let [rstHead, rstTail] = reversFn(tTail, k);
        if (resultHead == null) {
            resultHead = rstHead;
        } else {
            preTail.next = rstHead;
        }
        preTail = rstTail;
        tTail = rstTail.next;
        count -= k;
    }
    
    return resultHead;
};