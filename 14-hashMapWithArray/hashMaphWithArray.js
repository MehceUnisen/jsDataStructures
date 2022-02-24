class HashMap {
    constructor() {
        this.map = new Array(20);
    }

    addItem(data) {
        var index = this.hash(data);
        while (this.map[index] != null && index < 20) {
            index++;
        }
        this.map[index] = data;
    }

    hash(data) {
        return data % 20;
    }

    removeItem(data) {
        var index = this.hash(data);
        while (this.map[index] != data) {
            index++;
        }
        this.map[index] = null;
    }

}

var h = new HashMap();
h.addItem(5);
h.addItem(25);
h.removeItem(25);

console.log(h.map);