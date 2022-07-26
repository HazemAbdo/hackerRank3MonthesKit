SinglyLinkedListNode *reverse(SinglyLinkedListNode *llist)
{
    SinglyLinkedListNode *prev = nullptr;
    // we use next so that the list didn't break
    SinglyLinkedListNode *next = llist->next;
    while (llist != nullptr)
    {
        // ll(1)--> next(2)--> 3
        // null<--prev(1) llist(2)--> next(3)
        // null<--(1) <--prev(2)--> llist(3) next(null)
        // null<--(1) <--(2)<-- prev(3) next&&llist(null)
        // done
        llist->next = prev;
        prev = llist;
        llist = next;
        if (next)
            next = next->next;
    }
    return prev;
}