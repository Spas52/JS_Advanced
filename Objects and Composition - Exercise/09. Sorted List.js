function createSortedList() {
    collection = [];
    function add(element) {
        collection.push(element);
        this.size++;
        collection.sort((a, b) => a-b);
    }
    function remove(index) {
        if (0 <= index && index < collection.length) {
            collection.splice(index, 1);
            this.size--;
        }
    }
    function get(index) {
        if (0 <= index && index < collection.length) {
            return collection[index];
        }
    }
    return {
        size: 0,
        add,
        remove,
        get,
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
