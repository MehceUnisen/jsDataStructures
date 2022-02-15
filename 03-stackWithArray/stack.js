class Stack {

    stack = [];
    stackSize = 1;

    constructor(firstElement) {
        this.firstElement = firstElement
        this.stack[0] = firstElement;
    }

    pop() {
        if (this.stackSize === 1 && this.stack[0] == this.firstElement) {
            console.log("The stack will be empty!");
            this.deleteStack();
        } else if (this.stackSize === 1 && this.stack[0] != this.firstElement) {
            console.log("The stack is already empty!");
        } else {
            this.stackSize -= 1;
            this.stack.splice(this.stackSize, 1);
        }
    }

    push(valueToPush) {
        this.stack[this.stackSize] = valueToPush;
        this.stackSize++;
    }

    printStack() {
        console.log(this.stack);
    }

    deleteStack() {
        delete this.stack;
        this.stack = [];
        this.stackSize = 1;
    }

}

var myStack = new Stack(31);


myStack.push(14);
myStack.push(31);
myStack.push(31);
myStack.push(15);
myStack.printStack();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.printStack();