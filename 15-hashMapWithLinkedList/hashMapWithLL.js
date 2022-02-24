class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class HashMap {

    iter = null;
    head = null;

    constructor() {
        this.createMap();
    }

    createMap() {
        this.head = new Item(null);
        this.iter = this.head;
        for (var i = 0; i < 19; i++) {
            this.iter.next = new Item(null);
            this.iter = this.iter.next;
        }
    }

    addItem(data) {
        this.iter = this.head;

        var index = this.hash(data);
        for (var i = 0; !(i >= index && this.iter.data == null) && i < 20; i++) {
            this.iter = this.iter.next;
        }
        this.iter.data = data;
    }

    hash(data) {
        return data % 20;
    }

    removeItem(data) {
        this.iter = this.head;
        for (var i = 0; this.iter.data != data && i < 19; i++) {
            this.iter = this.iter.next;
        }
        if (this.iter.data == data) {
            this.iter.data = null;
        } else {
            console.log("Whoa!");
        }
    }

    printMap() {
        this.iter = this.head;
        for (var i = 0; i < 20; i++) {
            console.log(i + "th index -> " + this.iter.data);
            this.iter = this.iter.next;
        }
    }
}

var h = new HashMap();
h.addItem(15);
h.addItem(820);
h.addItem(13);
h.addItem(20);
h.addItem(21);
h.addItem(19);
// h.removeItem(19);
h.printMap();