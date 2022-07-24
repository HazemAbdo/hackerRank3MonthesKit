SinglyLinkedListNode* reverse(SinglyLinkedListNode* llist) {
    SinglyLinkedListNode *prev=nullptr;
    SinglyLinkedListNode *next=llist->next;
    while(llist!=nullptr)
    {
        llist->next=prev; 
        prev=llist;
        llist=next;    
        if(next)    
        next=next->next;
        if(prev)
         cout<<prev->data<<endl;
         if(llist)
        cout<<llist->data<<endl;
        if(next)
        cout<<next->data<<endl;
    }
   return prev;
}