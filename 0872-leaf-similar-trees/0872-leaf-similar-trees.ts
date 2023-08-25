/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const res1 = [], res2 = [];

    function leaf(root,res) {
        if(!root) return ; 

        if(!root.left && !root.right) res.push(root.val);

        if(root.left)leaf(root.left , res);
        if(root.right)leaf(root.right , res);

        return res;
    }

    leaf(root1, res1);
    leaf(root2 , res2);
    
    return res1.toString() === res2.toString() ;
};