class Node {
    next = null;
    constructor(data) {
        this.data = data;
    }
}


class LinkedList {

    lastNodeIndex = 0;

    constructor(initialValue) {
        this.head = new Node(initialValue);
        this.iter = this.head;
        this.iter.next = null;
    }


    addNode(data) {
        this.iter = this.head;
        while (data > this.iter.data && this.iter.next != null) {
            this.iter = this.iter.next;
        }

        if (this.iter.next === null) {
            this.iter.next = new Node(data);
            this.iter.next.next = null;
        } else if (this.head.data > data) {
            var newHead = new Node(data);
            newHead.next = this.head;
            this.head = newHead;
        } else {
            var toBond = this.iter.next
            this.iter.next = new Node(data);
            this.iter.next.next = toBond;
        }
        this.lastNodeIndex++;
    }

    removeNode(nodeIndex) {
        if (nodeIndex > this.lastNodeIndex) {
            console.log("Entered invalid index!");
            return;
        }
        if (nodeIndex === this.lastNodeIndex) {
            var newLastNode = this.gotToNode(--this.lastNodeIndex);
            newLastNode.next = null;
        } else if (nodeIndex > 0) {
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
        this.iter = this.head;
        while (this.iter != null) {
            console.log(this.iter.data);
            this.iter = this.iter.next;
        }
        // one of the node will not be printed because of the structure of loop
        // so I have to print out manually the last node data 

        this.iter = this.head;
    }
}


var ll = new LinkedList(30);

ll.addNode(32);
ll.addNode(48);
ll.addNode(17);
ll.addNode(12);
ll.addNode(11);


ll.printLinkedList();

// output
// 11
// 12
// 17
// 30
// 32
// 48