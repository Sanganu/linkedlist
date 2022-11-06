
function sortedInsert(llist, data) {
    // Write your code here
   let newNode = new DoublyLinkedListNode(data);
   let current = llist;
   if(data < current.data){
        newNode.next = current;
        current.prev = newNode;
        newNode.prev = null;
        return newNode;
        
   }
   console.log(current)
   while(current){
   console.log(current)
       let nextNode = current.next
       if(current.data <data && nextNode.data >= data){
           newNode.next = nextNode;
           newNode.prev = current;
           nextNode.prev = newNode;
           current.next = newNode;
           return llist;
       
       }else if(nextNode.next === null && nextNode.data < data){
           nextNode.next = newNode;
           newNode.prev =nextNode;
           newNode.next = null;
           llist.tail = newNode;
           return llist;
       } 
       else if(nextNode.data < data){
           current = nextNode;
       }
   }
}
