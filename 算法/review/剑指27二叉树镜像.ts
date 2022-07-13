
function mirrorTree(root: TreeNode | null): TreeNode | null {
  if(root){
      const temp=root.right
      root.right=root.left
      root.left=temp
      mirrorTree(root.right)
      mirrorTree(root.left)
      return root
  }else{
      return root
  }
  };
