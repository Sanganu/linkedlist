class DoubleListNode{
    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    }
    getNodeData(){
        return this.value;
    }
    setPreviousNode(node){
        this.previous = node;
    }
    setNextNode(node){
        this.next = node;
    }
    getPreviousNode(){
        return this.previous;
    }
    getNextNode(){
        return this.next;
    }
}

module.exports = DoubleListNode;
