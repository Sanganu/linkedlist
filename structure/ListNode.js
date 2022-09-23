class ListNode{
    constructor(value,next){
        this.value = value
        this.next = null
    }
    setNextNode(node){
        if(!(node instanceof ListNode)){
            throw new Error('ListNode Data type mismatch')
        }
        this.next = node;
    }

    getNextNode(){
        return this.next;
    }

}

module.export = ListNode;