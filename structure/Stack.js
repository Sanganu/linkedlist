const LinkedList = require("./LinkedList");

//Last In First out

class Stack{
    constructor(maxSize = Infinity){
        this.stack = new LinkedList()
        this.size = 0;
        this.maxSize = this.maxSize
    }
    pop(){

        if(!this.isEmpty()){
            const value = this.stack.removeHeadNode();
            this.size--;
            return value;
        }else{
            throw new Error("Stack is empty")
        }

    }
    isEmpty(){
        return this.size ? true : false
    }
    hasRoom(){
        return this.size<this.maxSize?true:false
    }
    peek(){
        if(!this.isEmpty()){
            return this.stack.head.getData()
        }else{
            throw new Error ("Empty Stack")
        }
    }
}