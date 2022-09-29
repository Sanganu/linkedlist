const DoubleListNode = require("./DoubleListNode");

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addNodeToHead(nodeData){
        const newNode = new DoubleListNode(nodeData);
        const currentHead = this.head;
        if(currentHead){
            this.head.setPreviousNode(newNode);
            newNode.setNextNode(this.head)
        }
        this.head = newNode
        if(this.tail === null){
            this.tail = newNode
        }

    }
}