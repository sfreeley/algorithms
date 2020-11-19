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

    //changing the value of a node based on its position in Linked List
    //accepts 2 parameters: index and value
    set(index, value) {
        //use get function to find specific node
        const foundNode = this.get(index);
        //if node is not found, return false
        if (!foundNode) {
            return false;
        }
        //otherwise, if node is found, set the value of that found node to be the value 
        //passed into the function as an argument
        foundNode.val = value;
        //return true
        return true;

    }

    //adding a node to the Linked List at a specific position
    //accepts 2 parameters: index and value
    insert(index, value) {
        //if index is less than zero or greater than the length of the list, return false
        if (index < 0 || index > this.length) return false;
        //if the index is the same as the length of the list, use push method to add a new node to the end of the list
        // double bang (double negation)
        if (index === this.length) return !!this.push(value);
        //if the index is 0, use the unshift method to add a new node to the beginning of the list
        if (index === 0) return !!this.unshift(value);
        //otherwise, using the get method, access the node at (index - 1) meaning we are getting the index
        //at the position left of where we are adding the new node
        const previousNode = this.get(index - 1);
        //instanstiate a new Node
        const newNode = new Node(value);
        //set that new Node's next property to the old node that previousNode was pointing to
        //(can also create intermediate variable that holds the value of previousNode.next and set newNode.next to it)
        newNode.next = previousNode.next
        //then set previousNode's next property to the new Node
        previousNode.next = newNode;
        //increment the length of the list
        this.length++
        //return true
        return true;
    }

    //removing a node from the Linked List at a specific position
    remove(index) {
        //if the index is less than zero or greater than or equal to the length, return undefined
        if (index < 0 || index >= this.length) return undefined;
        //if the index is the same as the length - 1, use the pop method to remove the node from the end of the list (b/c index is always one less than length)
        if (index === this.length - 1) return this.pop();
        //if the index is 0; use the shift method to remove the node from the beginning of the list
        if (index === 0) return this.shift();
        //otherwise, use get method to access the node at (index - 1) --> accessing the node prior to the one that is being removed
        const previousNode = this.get(index - 1);
        //the removedNode should be the node that previousNode is pointing to
        const removedNode = previousNode.next;
        //set the next property on the previousNode to be the next of the next node (ie set the previousNode's next property to whatever the removedNode was pointing to)
        previousNode.next = removedNode.next;
        //decrement the length
        this.length--;
        //return the value of the node that was removed
        return removedNode;

    }
}

let list = new SinglyLinkedList()
list.push(1);
list.push(2);
list.push(3);
list.push(4);



console.log(list.get(3));
console.log(list);
console.log(list.remove(3));
console.log(list);
console.log(list.get(3));






