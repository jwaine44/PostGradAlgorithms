/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function mergeTwoLists(list1, list2){
    const zeroNode = new ListNode();
    let currentNode = zeroNode;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            currentNode.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            currentNode.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }
    
    if (list1) {
        currentNode.next = list1;
    }
    
    if (list2) {
        currentNode.next = list2;
    }
    return zeroNode.next;
}

let List1 = [1,2,4];
let List2 = [1,3,4];
let List3 = [];
let List4 = [0];

console.log(mergeTwoLists(List1, List2));
console.log(mergeTwoLists(List3, List3));
console.log(mergeTwoLists(List3, List4));