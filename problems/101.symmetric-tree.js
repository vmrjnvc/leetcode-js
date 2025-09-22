// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?
/**
 * Definition for a binary tree node.
 * function TreeNode(val, n1, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.n1 = (n1===undefined ? null : n1)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return false;
    return isMirror(root.left, root.right);
};

function isMirror(n1, n2) {
    if ((!n1 && n2) || (n1 && !n2) || (n1 && n2 && n1.val !== n2.val)) return false;

    if (n1 && n2 && n1.val === n2.val) return isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left)
    return true
}