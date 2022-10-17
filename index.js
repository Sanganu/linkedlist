const LinkedList = require("./structure/LinkedList");
const ExtendedLinkList = require("./structure/ExtendedLinkList")
const Queue = require("./structure/Queue")

const months = new LinkedList()
const revMonths = new ExtendedLinkList()
months.addToHead("Jan");
// console.log(months)
months.addToTail("Feb");

months.printList();
months.addToHead("Dec");
months.addToTail("Dec");
months.printList();
months.removeHeadNode();
console.log("======= Linked List ========")
months.printList();

revMonths.addToHead("Apr");;
revMonths.addToHead("Mar");
revMonths.addToHead("Jan");
// console.log(months)
revMonths.addToTail("Feb");
console.log("---Linked List---")
revMonths.printList();
revMonths.addToHead("Dec");
revMonths.addToTail("Dec");
revMonths.printList();
revMonths.removeHeadNode();
console.log("======= Linked List ========")
revMonths.printList();
console.log("=========== Reverse Linked List ============")
revMonths.reverseList();
revMonths.printList();
console.log("===========================================================================");

const DoubleLinkedList = require("./structure/DoubleLinkedList");
console.log("----1.Double List-----")

const todos = new DoubleLinkedList();
todos.addNodeToTail("Temple Visit");
todos.printList();
// console.log(todos)
todos.addNodeToHead("Complete JS challenges")
todos.addNodeToTail("LC challenges");
todos.addNodeToHead("HR challenges");

console.log("----2.Double List-----")
todos.printList();
// console.log(todos)
todos.addNodeToTail("Lawn work")

todos.addNodeToTail("Kitchen work")
todos.addNodeToTail("PF routine");

console.log("----3.Double List-----")
todos.printList();
todos.removeHead()
todos.removeTail()
todos.removeByValue("Lawn work")
console.log("----4.Double List---- Finalized list ---")
todos.printList();
console.log("----5.Double List---- Reverse List ---")
todos.reverseDoubleList()
todos.printList();
//console.log(todos)
const breakfast = ['Apple','Graphes','Banana','Avacado','Bread','Oats','Cranberry Juice','Coffee']
const breakFastQueue = new Queue(10)
// console.log(breakFastQueue)
breakfast.forEach(item => {
    breakFastQueue.enqueue(item)
})

//console.log(breakFastQueue)
breakFastQueue.printQueueList()
breakFastQueue.dequeue()
breakFastQueue.dequeue()
breakFastQueue.printQueueList()