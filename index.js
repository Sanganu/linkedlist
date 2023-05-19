const LinkedList = require("./structure/LinkedList");
const ExtendedLinkList = require("./structure/ExtendedLinkList")
const Queue = require("./structure/Queue");
const Stack = require("./structure/Stack");

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
console.log("===========================================================================");

console.log("----------- Linked List ----------------")
months.printList();

revMonths.addToHead("Apr");;
revMonths.addToHead("Mar");
revMonths.addToHead("Jan");
// console.log(months)
revMonths.addToTail("Feb");

revMonths.printList();
revMonths.addToHead("Dec");
revMonths.addToTail("Dec");
revMonths.printList();
revMonths.removeHeadNode();
console.log("------------- Linked List ---------------")
revMonths.printList();
console.log("---------------- Reverse Linked List -------------------")
revMonths.reverseList();
revMonths.printList();
console.log("===========================================================================");

const DoubleLinkedList = require("./structure/DoubleLinkedList");
console.log("--------------1.Double Linked List-------------------")

const todos = new DoubleLinkedList();
todos.addNodeToTail("Temple Visit");
todos.printList();
// console.log(todos)
todos.addNodeToHead("Complete JS challenges")
todos.addNodeToTail("LC challenges");
todos.addNodeToHead("HR challenges");

console.log("----------------2.Double Linked List-------------------")
todos.printList();
// console.log(todos)
todos.addNodeToTail("Lawn work")

todos.addNodeToTail("Kitchen work")
todos.addNodeToTail("PF routine");

console.log("--------------3.Double Linked List-----------------")
todos.printList();
todos.removeHead()
todos.removeTail()
todos.removeByValue("Lawn work")
console.log("---------4.Double Linked List---- Finalized list ---------------")
todos.printList();
console.log("-----------5.Double Linked List---- Reverse List ---------------")
todos.reverseDoubleList()
todos.printList();
//console.log(todos)
const breakfast = ['Apple', 'Graphes', 'Banana', 'Avacado', 'Bread', 'Oats', 'Cranberry Juice', 'Coffee']
console.log("===========================================================================");

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

console.log("===========================================================================");

console.log("---------------- Stack ------------------")

const poleOfRings = new Stack(7)
const ringOfColors = ["Red", "Green", "Blue", "Purple", "Yellow", "Silver", "Pink"]

ringOfColors.forEach(element => {
    poleOfRings.stack.addToTail(element)
})
console.log("-------- Initial List ---------")
poleOfRings.printList()

if (poleOfRings.hasRoom()) {
    poleOfRings.stack.addToTail("Violet")
} else {
    poleOfRings.pop()
    poleOfRings.stack.addToTail("Lavendar")
}

console.log("---------- Updated List -------------")
poleOfRings.printList()