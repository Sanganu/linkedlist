class DoubleListNode{
    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    }
    getNodeDate(){
        return this.value;
    }
    setPreviousNode(node){
        this.previous = node;
    }
    setNextNode(node){
        this.next = node;
    }
}

module.exports = DoubleListNode;
