const LinkedList = require("./structure/LinkedList");

const months = new LinkedList()


months.addToHead("Jan");
console.log(months)
months.addToTail("Feb");
months.printList();
months.addToHead("Dec");
months.addToTail("Dec");
months.printList();
months.removeHeadNode();
months.printList();


