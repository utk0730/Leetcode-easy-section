var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
    
    let newList = new ListNode(-1)
    let temp = newList
    while(l1 && l2){
        if(l1.val > l2.val){
            temp.next = new ListNode(l2.val)
            l2 = l2.next
        }else{
            temp.next = new ListNode(l1.val)
            l1 = l1.next
        }
       temp=temp.next
    }
   
    if(l1 && !l2){
        temp.next = l1
    }
    if(l2 && !l1) {
        temp.next = l2
    }
   
    return newList.next;
};
