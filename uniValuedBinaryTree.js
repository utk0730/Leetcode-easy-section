var isUnivalTree = function(root) {
    var rootElement = root.val;
    
   var dfsPreOrder = function(node){
        if(node==null) return true
        if(node.val != rootElement) return false
        return dfsPreOrder(node.left) && dfsPreOrder(node.right)
        
    }
    
    return dfsPreOrder(root)
    
};
