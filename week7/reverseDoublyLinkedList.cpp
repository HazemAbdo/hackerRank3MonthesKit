DoublyLinkedListNode *reverse(DoublyLinkedListNode *llist)
{
  DoublyLinkedListNode *temp = nullptr;
  while (llist->next != nullptr)
  {

    temp = llist->next;
    llist->next = llist->prev;
    llist->prev = temp;
    llist = temp;
  }
  llist->next = llist->prev;
  return llist;
}
