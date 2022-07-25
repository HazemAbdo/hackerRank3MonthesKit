DoublyLinkedListNode *sortedInsert(DoublyLinkedListNode *llist, int data)
{
    DoublyLinkedListNode *temp = llist;
    DoublyLinkedListNode *tempNext = nullptr;
    DoublyLinkedListNode *newNode = new DoublyLinkedListNode(data);
    while (temp && temp->next && !(temp->next->data >= data))
    {
        temp = temp->next;
    }
    if (temp->data > data)
    {
        temp->prev = newNode;
        newNode->next = temp;
        llist = newNode;
    }
    else if (temp->next)
    {
        tempNext = temp->next;
        temp->next = newNode;
        newNode->prev = temp;
        newNode->next = tempNext;
        tempNext->prev = newNode;
    }
    else if (!temp->next)
    {
        temp->next = newNode;
        newNode->prev = temp;
        newNode->next = nullptr;
    }
    // -----------------
    return llist;
}
