//piece of data -val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    //doesn't take any arguments
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push method: INSERT new node to end of the list (tail)
    //with each push we are adding a new node to the end of the list and pointing to it
    push(val) {
        //new instance of Node
        let newNode = new Node(val)
        //if there is nothing in the list, set head to newNode an tail to newNode
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            //otherwise...
            //take the current tail's next property and set that to the newNode
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
        //return the whole list
        return this;
    }

    pop() {
        //if no nodes, return undefined
        if (this.head === null) return undefined;
        //loop through the list until reach 2nd to last node
        //set current equal to this.head (starting at beginning)
        let current = this.head;
        //declare prev (which will be second to last node) to equal current (b/c both current and prev will start at the same spot in the beginning)
        let prev = current
        //while the next property of current is not null, keep looping (ie if it isn't the end of the list)
        while (current.next) {
            //the second to last node will be set equal to current (always 1 behind current)
            prev = current
            //the current node will be set equal to current.next as long as there is a current.next (ie not the end of the list)
            current = current.next
        }
        //set next property of the 2nd to last node equal to null
        prev.next = null;
        //set the tail to then be the 2nd to last node
        this.tail = prev;
        //decrement the length of the list by 1
        this.length--;
        //edge case where if the length of the list is 1 and we remove that node, we must set the head and the tail to null after removal
        //( at this point our head and our tail are set to equal the same thing )
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        //return value of node that was removed
        return current


    }

    //shifting-removing new node from beginning of linked list (constant time)
    shift() {
        //no nodes, return undefined
        if (!this.head) return undefined;
        //store the current head property in a variable
        let currentHead = this.head;
        //set the head property to be the current head's next property (next node)
        this.head = currentHead.next;
        //decrement the length of the list by 1
        this.length--;
        //if length is 0, set tail to null
        if (this.length === 0) {
            this.tail = null;
        }
        //return the value of the node removed
        return currentHead;

    }

    //adding a new node to the beginning of the Linked List
    //this function should accept a value
    unshift(val) {
        //create a new node using value passed to the function
        let newHead = new Node(val);
        //if there is no head property on the list, set the head and tail to be the newly created node
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        }
        //otherwise...
        else {
            //set newly created node's next property to be the current head property on the list (ie the newly created node should be pointing to the current head)
            newHead.next = this.head;
            //then set the head property on the list to be the newly created node
            this.head = newHead;
        }
        //increment the length of the list by 1
        this.length++;
        //return the linked list
        return list;

    }

    //retrieving a node by its position in the Linked List
    //function accepts an index (but not the same idea as an array--more of keeping track of a count rather than index) or position and returns the value or item in that position
    get(index) {
        //if the index is less than zero or greater than or equal to the length of the list, return null;
        if (index < 0 || index >= this.length) return null;
        //loop through the list until you reach the index and return the node at that specific index
        let current = this.head
        for (let i = 0; i < index; i++) {
            //in order to traverse the list, we are setting the current node to the next property and so on until we reach that specific index 
            current = current.next
        }
        //return the node at that index we passed in as an argument
        return current
    }

    //can also use a while loop with a counter (while the counter does not equal the index we are looking for)
    //let counter = 0;
    //let current = this.head;
    /* while(counter !== index) {
        current = current.next;
        counter++
    } */

}

let list = new SinglyLinkedList()
list.push(1);
list.push(2);
list.push(3);



console.log(list.get(0));
console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);




