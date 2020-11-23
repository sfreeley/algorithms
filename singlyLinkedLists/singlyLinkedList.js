//Udemy Javascript Algos Course: Singly Linked Lists
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
    //O(1) Big O notation
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

    //removing node from end of linked list
    //O(N) because we must loop through the whole list and find the node prior to the one we are removing
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

    //shifting-removing new node from beginning of linked list 
    //O(1) Big O notation--> constant time only if removing from beginning
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
    //O(1) Big O notation
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
    //O(N) have to loop through to find the position
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
    //O(1) Big O notation
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

    //reversing linked list in place
    reverse() {
        //swap the head and tail
        //create a variable that will be what our current node is and initialize it to the head property
        let currentNode = this.head;
        //set the current head node to the tail
        this.head = this.tail
        //set the tail node equal to the current head
        this.tail = currentNode;
        //create a variable called next (node after the current node);
        let next;
        //create a variable called prev (node prior to the currentNode) --> initially will be null because there will be nothing prior to the first node (the tail);
        //it needs to be null so that tail.next is null 
        let prev = null;

        //loop through the list
        for (let i = 0; i < this.length; i++) {
            //next will be set equal to whatever the currentNode's next property is (whatever the current node is pointing to at the moment)
            next = currentNode.next;
            //in order to reverse the direction that the the current node is pointing to, we need to set the current node's next property to equal the previous node (which initially will be null)
            currentNode.next = prev;
            //then shift the window over and set the previous node equal to the current node
            prev = currentNode;
            //then the currentNode now will become the next node
            currentNode = next;
        }
        //return the list;
        return this;
    }

    //BIG O --> singly linked lists are good at insertion and deletion as compared to arrays; do not have to shift the entire array
    //arrays are better at random access due to indexing
}

let list = new SinglyLinkedList()
list.push(1);
list.push(2);
list.push(3);
list.push(4);




console.log(list);
console.log(list.get(2))
console.log(list.reverse());
console.log(list.get(2));






