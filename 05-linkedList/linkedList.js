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
        this.iter.next = null;
    }


    addNode(data, position = -1) {
        this.iter = this.head;

        if (position > this.lastNodeIndex) {
            position = -1;
        }
        if (position === -1) {
            //this will add node to the end
            while (this.iter.next != null) {
                this.iter = this.iter.next;
            }

            this.iter.next = new Node(data);
            this.iter.next.next = null;
            this.lastNodeIndex++;

        } else if (position === 0) {

            this.head = new Node(data);
            this.head.next = this.iter;
            this.lastNodeIndex++;

        } else if (position > 0) {
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

        this.iter = this.head;
        for (var i = 0; i < nodeIndex; i++) {
            this.iter = this.iter.next;
        }
        return this.iter;
    }

    printLinkedList() {
        this.iter = this.head;
        while (this.iter.next != null) {
            console.log(this.iter.data);
            this.iter = this.iter.next;
        }
        console.log(this.iter.data);

        this.iter = this.head;
    }
}

var ll = new LinkedList(30);

ll.addNode(32)
ll.addNode(33);
ll.addNode(34);
ll.addNode(36);
ll.addNode(37);
ll.addNode(31, 1);
ll.addNode(35, 5);
ll.removeNode(1);


ll.printLinkedList();