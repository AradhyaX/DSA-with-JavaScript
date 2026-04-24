// TOPIC: Linked Lists in JavaScript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the end
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Insert at the beginning
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Print the list
    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

// Q1: CREATE A LINKED LIST AND APPEND ELEMENTS
/*
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
console.log("Linked List:");
list.printList();
*/

// Q2: PREPEND ELEMENTS TO A LINKED LIST
/*
const list2 = new LinkedList();
list2.prepend(30);
list2.prepend(20);
list2.prepend(10);
console.log("Linked List after prepending:");
list2.printList();
*/
