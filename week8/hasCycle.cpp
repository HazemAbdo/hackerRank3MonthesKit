bool has_cycle(SinglyLinkedListNode *head)
{
    SinglyLinkedListNode *temp = head;
    // define set to store the nodes that are visited
    set<SinglyLinkedListNode *> visited;
    while (temp)
    {
        if (visited.count(temp) == 1)
        {
            return 1;
        }
        else
        {
            visited.insert(temp);
        }
        temp = temp->next;
    }
    return 0;
}
