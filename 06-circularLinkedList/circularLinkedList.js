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
        if (nodeIndex === this.lastNodeIndex) {
            this.lastNodeIndex -= 1;
            var newLastNode = this.gotToNode(this.lastNodeIndex);
            // bonding new last node with the head
            newLastNode.next = this.head;
        } else if (nodeIndex > 0) {
            // this will stay the same as the normal linked lists
            var delNode = this.gotToNode(nodeIndex);
            var prevNode = this.gotToNode(--nodeIndex);
            prevNode.next = delNode.next;
            this.lastNodeIndex -= 1;
        } else if (nodeIndex === 0) {
            var lastNode = this.gotToNode(this.lastNodeIndex);
            this.head = this.head.next;
            this.iter = this.head;
            //bonding the last node with the new head
            lastNode.next = this.head;
            this.lastNodeIndex -= 1;
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

// 0th index data -> 11
// 1th index data -> 12
// 2th index data -> 13
// 3th index data -> 14
// 4th index data -> 10
// 5th index data -> 11
// 6th index data -> 12
// 7th index data -> 13
// 8th index data -> 14
// 9th index data -> 10
// 10th index data -> 11
// 11th index data -> 12
// 12th index data -> 13
// 13th index data -> 14



ll.removeNode(0);
ll.removeNode(ll.lastNodeIndex);

// 0th index data -> 12
// 1th index data -> 13
// 2th index data -> 11
// 3th index data -> 12
// 4th index data -> 13
// 5th index data -> 11
// 6th index data -> 12
// 7th index data -> 13
// 8th index data -> 11
// 9th index data -> 12
// 10th index data -> 13
// 11th index data -> 11