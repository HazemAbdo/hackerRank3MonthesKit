function insertNodeAtPosition(llist, data, position) {
  let newNode = new SinglyLinkedListNode(data);
  if (position == 0) {
    newNode.next = llist;
    llist = newNode;
  }
  let prev = new SinglyLinkedListNode(0);
  prev.next = llist.next;
  for (let i = 1; i < position; i++) {
    prev = prev.next;
  }
  newNode.next = prev.next;
  prev.next = newNode;
  return llist;
}
