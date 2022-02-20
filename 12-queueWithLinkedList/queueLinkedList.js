class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(data) {
        //keeping the tail will do a lot of favor
        //because all the action happens at the head and tail
        this.head = new Item(data);
        this.head.next = null;
        this.tail = this.head;
    }

    enqueue(data) {
        //simple stuff just add new item to tail
        this.tail.next = new Item(data);
        this.tail = this.tail.next;
        this.tail.next = null;
    }

    dequeue() {
        //much simpler stuff
        //just change the head to the next lol
        if (this.head != this.tail) {
            this.head = this.head.next;
        }
    }

    printQueue() {
        this.iter = this.head;

        while (this.iter != null) {
            console.log(this.iter.data);
            this.iter = this.iter.next;
        }
    }

}

var q = new Queue(10);
q.enqueue(11);
q.enqueue(12);
q.enqueue(13);
q.enqueue(14);

q.printQueue();

// output
// 10
// 11
// 12
// 13
// 14


q.dequeue();
q.dequeue();

q.printQueue();

// output
// 12
// 13
// 14