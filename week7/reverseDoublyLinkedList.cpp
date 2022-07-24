DoublyLinkedListNode* reverse(DoublyLinkedListNode* llist) {
  DoublyLinkedListNode *temp=nullptr;
    while(llist->next!=nullptr)
    {
        cout<<"llist"<<llist->data<<endl;
        temp=llist->next;
        llist->next=llist->prev;
        llist->prev=temp;
        if(llist->next)
        cout<<"next"<<llist->next->data<<endl;
        if(llist->prev)        
        cout<<"prev"<<llist->prev->data<<endl;                
        llist=temp;        
    }
    llist->next=llist->prev;
    return llist;
}
