const LinkedList = require("./LinkedList");
const Diagram = require("cli-diagram")

// First In First Out
class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList()
        this.size = 0;
        this.maxSize = maxSize;
    }
    isEmpty() {
        return this.size === 0;
    }
    hasRoom() {
        return this.size < this.maxSize;
    }
    enqueue(data) {
        if (this.hasRoom()) {
            this.queue.addToTail(data)
            this.size++
        } else {
            console.error("Queue is full!")
        }
    }
    dequeue() {
        if (!this.isEmpty()) {
            const data = this.queue.removeHeadNode();
            this.size--;
            return data;
        } else {
            console.log("Queue empty")
        }
    }
   printQueueList(){
    console.log('---------------- Queue FIFO ------------------')
    this.queue.printList()
    
   }

}

module.exports = Queue;
