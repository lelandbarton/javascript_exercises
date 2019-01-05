
/**
 Definition for singly-linked list.
*/
function ListNode(val, next) {
    this.val = val;
    this.next = next;
    this.sum = function() {
      let returnVal = '';
      const build = (n) => {
        returnVal = n.val + returnVal;
        if (!!n.next) build(n.next);
      }
      
      build(this);

      return returnVal;
    }
}

const cleanNumber = n => Math.floor(n);
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1 || !l2) throw new Error("Both lists must be defined");
  const recurse = (n1,n2,isCarried,prevNode,start) => {
    const carry = isCarried === true ? 1 : 0;
    const newVal = Math.floor(n1.val + n2.val + carry);
    let newValForNode = null;
    let isCarriedForNode = false;
    if (newVal > 9) {
      newValForNode = newVal.toString()[1];
      isCarriedForNode = true;
    } else {
      newValForNode = newVal.toString()[0];
      isCarriedForNode = false;
    }
    const newNode = new ListNode(newValForNode, null);
    if (prevNode != null) {
      prevNode.next = newNode;
    }
    let newStart = start;
    if (!start) { newStart = newNode; }

    if (!!n1.next && !!n2.next) {
      return recurse(n1.next, n2.next, isCarriedForNode, newNode, newStart);
    } else { 
      return newStart;
    }
  }
  

  return recurse(l1,l2,false,null,null);
};

module.exports = { addTwoNumbers, ListNode };
