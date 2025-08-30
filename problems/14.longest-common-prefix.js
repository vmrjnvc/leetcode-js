// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstStr = strs.splice(0,1)[0]; // store first string in variable and remove it from the initial array
    if (!firstStr) return '';
    let prefix = '';
    for (let i = 0; i < firstStr.length; i++) {
        const tempChar = firstStr[i];
        for (let j = 0; j < strs.length; j++) {
            if (tempChar !== strs[j][i]) return prefix;
        }
        prefix += tempChar;
    }
    return prefix;
};

console.log(longestCommonPrefix(['abc', 'abcd', 'abd']));
console.log(longestCommonPrefix(['hello', 'helloworld', 'health']));
console.log(longestCommonPrefix(['', '', '']));