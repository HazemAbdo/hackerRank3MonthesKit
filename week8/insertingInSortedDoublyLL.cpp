DoublyLinkedListNode *sortedInsert(DoublyLinkedListNode *llist, int data)
{
    DoublyLinkedListNode *temp = llist;
    DoublyLinkedListNode *tempNext = nullptr;
    DoublyLinkedListNode *newNode = new DoublyLinkedListNode(data);
    // keep moving until you get the end of the list
    // or you find the place to insert the new node-->  next is >= data
    while (temp && temp->next && !(temp->next->data >= data))
    {
        temp = temp->next;
    }
    //   insert(1)  in 2 3 4 ---> 1 2 3 4
    if (temp->data > data)
    {
        temp->prev = newNode;
        newNode->next = temp;
        llist = newNode;
    }
    else if (temp->next)
    {
        // insert (2) in 1 3 4 -->1 2 3 4
        tempNext = temp->next;
        temp->next = newNode;
        newNode->prev = temp;
        newNode->next = tempNext;
        tempNext->prev = newNode;
    }
    else if (!temp->next)
    {
        // insert (5) in 1 2 4 --> 1 2 4 5
        temp->next = newNode;
        newNode->prev = temp;
        newNode->next = nullptr;
    }
    // -----------------
    return llist;
}
