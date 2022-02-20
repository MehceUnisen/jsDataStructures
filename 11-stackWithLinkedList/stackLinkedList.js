class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(data) {
        this.head = new Item(data);
        this.head.next = null;
        this.tail = this.head;
    }

    push(data) {
        this.tail.next = new Item(data);
        this.tail = this.tail.next;
        this.tail.next = null;
    }

    pop(data) {
        var penultNode = this.penultimateNode();
        penultNode.next = null;
        this.tail = penultNode;
    }

    penultimateNode() {
        try {
            this.iter = this.head;
            while (this.iter.next != this.tail) {
                this.iter = this.iter.next;
            }

            return this.iter;

        } catch (error) {
            return this.head;
        }

    }

    printStack() {
        this.iter = this.head;
        while (this.iter != null) {
            console.log(this.iter.data);
            this.iter = this.iter.next;
        }
    }



}

var s = new Stack(10);
s.push(11);
s.push(12);
s.push(13);
s.push(14);

s.pop();
s.pop();
s.printStack();
// output
// 10
// 11
// 12


s.pop();
s.pop();
s.printStack();
// output
// 10