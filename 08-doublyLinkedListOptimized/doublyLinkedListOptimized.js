//for this linked list implementation I'll be coding
//all the previous codes again for practice!

class Node {
    next = null;
    prev = null;
    data = 0;

    constructor(data) {
        this.data = data;
    }
}

class LinkedList {

    lastNodeIndex = 0;
    nodeCursor = 0;
    distanceForward = 0;
    distanceBackward = 0;


    constructor(data) {
        this.head = new Node(data);
        this.head.next = this.head;
        this.head.prev = this.head;
        this.iter = this.head;
    }

    addNode(data, position = -1) {

        if (position > this.lastNodeIndex) {
            position = -1;
        }

        if (position === -1) {
            var lastNode = this.goToNode(this.lastNodeIndex);
            lastNode.next = new Node(data);
            lastNode.next.next = this.head;
            lastNode.next.prev = lastNode;
            this.head.prev = lastNode.next;
            this.lastNodeIndex++;

        } else if (position === 0) {
            var newHead = new Node(data);
            newHead.next = this.head;
            this.head.prev = newHead;
            newHead.prev = this.goToNode(this.lastNodeIndex);
            newHead.prev.next = newHead;
            this.head = newHead;
            this.lastNodeIndex++;

        } else if (position > 0 || position === this.lastNodeIndex) {
            // adding new node in between two node

            var newNode = new Node(data);
            position -= 1;
            var prevNode = this.goToNode(position);
            var nextNode = prevNode.next;

            prevNode.next = newNode;
            newNode.next = nextNode;
            newNode.prev = prevNode;
            nextNode.prev = newNode;


            this.lastNodeIndex++;

        } else {
            console.log("Bro how TF! I left to much safety");
        }

    }

    removeNode(position) {

        if (position >= this.lastNodeIndex) {
            position = -1;
        }

        if (position === -1) {
            var newLastNode = this.goToNode((this.lastNodeIndex - 1));
            newLastNode.next = this.head;
            this.head.prev = newLastNode;
            this.lastNodeIndex--;

        } else if (position === 0) {
            var lastNode = this.goToNode(this.lastNodeIndex - 1);
            this.head = this.head.next;
            this.head.prev = lastNode.prev;
            lastNode.next = this.head;

            this.lastNodeIndex--;

        } else if (position > 0) {
            var thisNode = this.goToNode(position);
            position -= 1;
            var prevNode = this.goToNode(position);
            position += 2;
            var nextNode = this.goToNode(position);
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            this.nodeCursor--;
            this.lastNodeIndex--;

        } else {
            console.log("Bro how TF! I left to much safety");
        }
    }

    goToNode(position) {
        if (position > this.lastNodeIndex) {
            console.log("Entered invalid index!");
            return;
        }
        var legend = this.calculateDistance(position);
        if (legend[1] == 0) {
            for (var i = 0; i < legend[0]; i++) {
                this.iter = this.iter.next;
            }
        } else if (legend[1] == 1) {
            for (var i = 0; i < legend[0]; i++) {
                this.iter = this.iter.prev;
            }
        } else {
            console.log("legend is incorrect, legend[1] = " + legend[1]);
        }
        this.nodeCursor = position;

        return this.iter;
    }

    calculateDistance(position) {
        if (position < 0) {
            return;
        }
        if (position <= this.lastNodeIndex) {

            if (this.nodeCursor > position) {
                this.distanceBackward = this.nodeCursor - position;
                this.distanceForward = (this.lastNodeIndex + 1) - this.distanceBackward;
            } else if (position > this.nodeCursor) {
                this.distanceForward = position - this.nodeCursor;
                this.distanceBackward = (this.lastNodeIndex + 1) - this.distanceForward;
            } else {
                return [0, 0];
            }
        } else {
            console.log("Bro enter a valid index");
            return;
        }
        if (position < this.distanceBackward && position < this.distanceForward) {
            this.nodeCursor = 0;
            this.iter = this.head;
            return [position, 0];
        } else if ((this.lastNodeIndex - position) < this.distanceBackward && (this.lastNodeIndex - position) < this.distanceForward) {
            this.nodeCursor = this.lastNodeIndex;
            this.iter = this.head.prev; //tail
            return [this.lastNodeIndex - position, 1];
        } else if (this.distanceForward >= this.distanceBackward) {
            return [this.distanceBackward, 1];
        } else if (this.distanceForward < this.distanceBackward) {
            return [this.distanceForward, 0];
        }
    }

    printLinkedList() {
        this.iterPrint = this.head;
        this.lastNodeIndex += 10;
        for (var i = 0; i < this.lastNodeIndex; i++) {
            console.log(i + "th index data -> " + this.iterPrint.data);
            this.iterPrint = this.iterPrint.next;
        }
    }


}

var ll = new LinkedList(10);
ll.addNode(11);
ll.addNode(12);
ll.addNode(14);
ll.addNode(13, 3);
ll.removeNode(3);
ll.addNode(13, 3);

ll.printLinkedList();

// output is
// 0th index data -> 10
// 1th index data -> 11
// 2th index data -> 12
// 3th index data -> 13
// 4th index data -> 14