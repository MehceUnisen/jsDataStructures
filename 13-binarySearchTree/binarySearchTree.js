class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(data) {
        this.root = new Node(data);
        this.root.left = null;
        this.root.right = null;
    }

    addNode(data) {
        var direction = this.setDirection(data);

        if (direction == 0) {
            this.iter.left = new Node(data);
            this.iter.left.left = null;
            this.iter.left.right = null;
        }
        if (direction == 1) {
            this.iter.right = new Node(data);
            this.iter.right.left = null;
            this.iter.right.right = null;
        }
    }

    setDirection(data) {
        this.iter = this.root;
        while (this.iter.left != null || this.iter.right != null) {
            if (this.iter.left === null && this.iter.right.data > data) {
                return 0; //left
            } else if (this.iter.right === null && this.iter.left.data <= data) {
                return 1; //right
            } else if (this.iter.data >= data) {
                this.iter = this.iter.left;
            } else {
                this.iter = this.iter.right;
            }
        }

        return 0;
    }

}

var bst = new BinaryTree(10);
bst.addNode(9);
bst.addNode(8);
bst.addNode(11);

console.log(bst.root)