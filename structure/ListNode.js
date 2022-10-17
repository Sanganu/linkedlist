class ListNode{
    constructor(value){
        this.value = value
        this.next = null
    }
    setNextNode(node){
        // console.log(node)
        if(!(node instanceof ListNode) && node !== null){
            throw new Error('ListNode Data type mismatch')
        }
        this.next = node; 
    }

    getNextNode(){
        return this.next;
    }

    getData(){
        return this.value;
    }

    updateData(value){
        this.value = value
    }
}

module.exports = ListNode;