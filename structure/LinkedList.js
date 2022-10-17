const ListNode = require("./ListNode");

class LinkedList {
    constructor() {
        this.head = null;
    }
    addToHead(data) {
        let newHead = new ListNode(data);
        if (this.head) {
            newHead.setNextNode(this.head)
        }
        this.head = newHead
    }
    addToTail(data) {
        let newTail = new ListNode(data);
        let currentNode = this.head;
        if (!currentNode) {
            this.head = newTail;

        } else {
            let previousNode = currentNode;
            while (currentNode !== null) {
                previousNode = currentNode;
               // console.log(previousNode)
                currentNode = currentNode.getNextNode()

            }
            previousNode.setNextNode(newTail)
        }
    }
    removeHeadNode() {
        let newHead = this.head.getNextNode()
        this.head = newHead
    }
    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.getData() + ' -> ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
       
        console.log(output);
    }

}

module.exports = LinkedList;
