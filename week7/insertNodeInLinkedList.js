function insertNodeAtPosition(llist, data, position) {
  let newNode = new SinglyLinkedListNode(data);
  //insert at head
  if (position == 0) {
    newNode.next = llist;
    llist = newNode;
  }
  let prev = new SinglyLinkedListNode(0);
  prev.next = llist.next;
  //from position 1 to n-1
  for (let i = 1; i < position; i++) {
    prev = prev.next;
  }
  //prev is in the position before the node to be inserted
  //1-->2-->3  insert 3 at position 1
  newNode.next = prev.next; //1-->2&&3-->3
  prev.next = newNode; //1-->2-->3-->3
  return llist;
}
