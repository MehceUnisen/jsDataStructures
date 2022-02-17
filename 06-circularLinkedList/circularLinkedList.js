//I'll be using the same code that I wrote for linkedList.js
//This will make the things even more easiser for me!

class Node {

    next = null;
    data = 0;

    constructor(data) {
        this.data = data;
    }

}

class LinkedList {

    lastNodeIndex = 0;

    constructor(initialValue) {
        this.head = new Node(initialValue);
        this.iter = this.head;

        //setting the initial node and making point back to head
        this.iter.next = this.head;
    }


    addNode(data, position = -1) {
        this.iter = this.head;

        if (position > this.lastNodeIndex) {
            position = -1;
        }
        if (position === -1) {
            //this will add node to the end
            //that means we have to change the node that points head
            this.lastNodeIndex += 1;
            for (var i = 0; i < (this.lastNodeIndex - 1); i++) {
                this.iter = this.iter.next;
            }

            this.iter.next = new Node(data);
            this.iter.next.next = this.head;

        } else if (position === 0) {
            //this will simply change the head node
            this.head = new Node(data);
            this.head.next = this.iter;
            this.lastNodeIndex++;

        } else if (position > 0) {
            // adding new node in between two node
            var newNode = new Node(data);
            position -= 1;
            var prevNode = this.gotToNode(position);
            position += 1;
            var nextNode = this.gotToNode(position);
            prevNode.next = newNode;
            newNode.next = nextNode;
            this.lastNodeIndex++;

        } else {
            console.log("Enter a valid position!");
        }
    }

    removeNode(nodeIndex) {
        if (nodeIndex > this.lastNodeIndex) {
            console.log("Entered invalid index!");
            return;
        }
        if (nodeIndex > 0) {
            // had several issues due to lack of pointer :(
            var delNode = this.gotToNode(nodeIndex);
            var prevNode = this.gotToNode(--nodeIndex);
            prevNode.next = delNode.next;
        } else if (nodeIndex === 0) {
            this.head = this.head.next;
            this.iter = this.head;
        }
    }

    gotToNode(nodeIndex) {
        if (nodeIndex > this.lastNodeIndex) {
            console.log("Entered invalid index!");
            return;
        }
        // simple stuff you know how it goes
        this.iter = this.head;
        for (var i = 0; i < nodeIndex; i++) {
            this.iter = this.iter.next;
        }
        return this.iter;
    }

    printLinkedList() {
        //beacuse the last node pointing the head
        //we can not use the same while loop to iterate 
        //instead we will use this.lastNodeIndex + 1
        //"+1" is for checking if the algorithm works!
        this.iter = this.head;
        this.lastNodeIndex += 10;
        for (var i = 0; i < this.lastNodeIndex; i++) {
            this.iter = this.iter.next;
            console.log(i + "th index data -> " + this.iter.data);
        }
    }
}

var ll = new LinkedList(10);
ll.addNode(11);
ll.addNode(12);
ll.addNode(13);
ll.addNode(14);




ll.printLinkedList();