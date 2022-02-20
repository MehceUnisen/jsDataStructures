class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(data) {
        this.head = new Item(data);
        this.head.next = null;
        this.tail = this.head;
    }

    enqueue(data) {
        this.tail.next = new Item(data);
        this.tail = this.tail.next;
        this.tail.next = null;
    }

    dequeue() {
        try {
            this.head = this.head.next;
        } catch (error) {
            console.log("You have only one item in the queue");
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