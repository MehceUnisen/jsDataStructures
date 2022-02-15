class Queue {

    queue = [];
    queueLength = 1;
    lastQueuedElement = 0;


    constructor(firstValue) {
        this.firstValue = firstValue;
        this.queue[0] = firstValue;
    }

    queueElement(element) {
        this.lastQueuedElement = element;
        this.queue[this.queueLength] = element;
        ++this.queueLength;
    }

    dequeueElement() {
        if (this.queueLength === 1 && this.queue[0] == this.lastQueuedElement) {
            console.log("Deleting the queue!");
            this.deleteQueue();
        } else if (this.queueLength === 1 && this.queue[0] != this.lastQueuedElement) {
            console.log("Queue is already empty!");
        } else {
            this.queue.splice(0, 1);
            --this.queueLength;
        }
    }

    printQueue() {
        console.log(this.queue);
    }

    deleteQueue() {
        this.queue = [];
        this.queueLength = 1;
        return;
    }
}