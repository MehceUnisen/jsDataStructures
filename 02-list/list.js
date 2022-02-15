function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

function append(element) {
    this.dataStore[listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (element === this.dataStore[i]) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var elementIndex = find(element);
    if (elementIndex === -1) {
        return false;
    } else {
        this.dataStore.splice(elementIndex, 1);
        --this.listSize;
        return true;
    }
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function clear() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
}

function insert(element, index) {
    if (--index > listSize) {
        this.dataStore[listSize] = element;
        ++listSize;
    } else {
        for (var i = 0; i < index; i++) {
            this.dataStore.splice(index, 0, element);
        }
    }

}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");


names.append("Barbara");
print(names.toString());
names.remove("Raymond");
print(names.toString());