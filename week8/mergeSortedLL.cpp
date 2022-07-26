// TODO refactor this code
SinglyLinkedListNode *mergeLists(SinglyLinkedListNode *head1, SinglyLinkedListNode *head2)
{
    SinglyLinkedListNode *smaller = nullptr;
    SinglyLinkedListNode *bigger = nullptr;
    if (head1->data < head2->data)
    {
        smaller = head1;
        bigger = head2;
    }
    else
    {
        smaller = head2;
        bigger = head1;
    }

    SinglyLinkedListNode *lastSmaller = smaller;
    SinglyLinkedListNode *temp2 = nullptr;
    SinglyLinkedListNode *temp1 = nullptr;
    SinglyLinkedListNode *nextBigger = nullptr;
    while (bigger)
    {
        cout << "bigger" << bigger->data << endl;
        while (lastSmaller->next && bigger && bigger->data > lastSmaller->next->data)
        {
            cout << "lastSmaller" << lastSmaller->data << endl;
            lastSmaller = lastSmaller->next;
        }
        // 1->h(3)
        // temp2(2)->head(4)
        temp1 = lastSmaller;
        if (lastSmaller)
            nextBigger = lastSmaller->next;
        temp2 = bigger;
        bigger = bigger->next;
        //---------------
        if (temp1)
            temp1->next = temp2;
        if (temp2)
            temp2->next = nextBigger;
        lastSmaller = temp2;
        //---------------
    }
    return smaller;
}
