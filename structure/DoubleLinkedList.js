const DoubleListNode = require("./DoubleListNode");
const Diagram = require("cli-diagram")
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

    addNodeToTail(nodeData){
        const newNode = new DoubleListNode(nodeData);
        const currentTail =  this.tail
        if(currentTail){
            newNode.setPreviousNode(currentTail)
            this.tail.setNextNode(newNode)

        }
        this.tail = newNode;
        if(this.head === null){
            this.head = newNode;
        }
    }

    removeHead(){
        let currentDeleteNode = this.head;
        if(!currentDeleteNode) return "Empty List";
        this.head = currentDeleteNode.getNextNode()
        if(this.head) this.head.setPreviousNode(null)
        if(this.tail = this.currentDeleteNode){
            this.removeTail()
        }
    }

    removeTail(){
        let removedNode = this.tail;
        if(!removedNode) return "Empty List";
        this.tail = removedNode.getPreviousNode()
        if(this.tail)this.tail.setNextNode(null)
        if(removedNode === this.head){
            this.removeHead()
        }
    }

    removeByValue(data){
        let removedNode;
        let currentNode = this.head;
        if(!currentNode)return "Empty List";
        while(currentNode){
            if(currentNode.value === data){
                removedNode = currentNode;
                break;
            }
            currentNode = currentNode.getNextNode()
        }
        if(!removedNode) return "Element doesn't exist";
        if(removedNode === this.head){
            this.removeHead()
        }else if(removedNode === this.tail){
            this.removeTail()
        }else{
            let previousNode = removedNode.getPreviousNode()
            let nextNode = removedNode.getNextNode()
            previousNode.setNextNode(nextNode)
            nextNode.setPreviousNode(previousNode)
        }
    }

    printList(){
        let currentNode = this.head;
        const myDiagram = new Diagram()
        while(currentNode){
            myDiagram.box(currentNode.value)
            currentNode = currentNode.getNextNode()
            if(currentNode !== null){
                myDiagram.arrow(['-->', '<--'])
            }
        }
        console.log(myDiagram.draw())
        
        // let output = `<<head>>`
        // while(currentNode){
        //     output += ` <-${currentNode.value}-> `
        //     currentNode = currentNode.getNextNode()
        // }
        // output += `<<Tail>>`
        // console.log(output)
    }

    reverseDoubleList() {
        // Write your code here
        let currentHead = this.head;
        let prev; 
        if(currentHead === null){
            return;
        }else{
            prev = currentHead.previous
        }
        while(currentHead){
            let temp_next = currentHead.next
            currentHead.setNextNode(currentHead.previous);
            currentHead.setPreviousNode(temp_next)
            prev = currentHead
            currentHead = currentHead.previous
        }
       
        this.head = prev
        //console.log(this.head)
        // return currentHead
    }

}
module.exports = DoubleLinkedList;


