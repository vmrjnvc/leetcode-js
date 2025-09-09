// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = '';
    let carry = 0;
    let sum = 0;
    let [i,j] = [a.length - 1, b.length - 1];
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;
        if (i >= 0) {
            sum += Number(a[i]);
            i--;
        }
        if (j >= 0) {
            sum += Number(b[j]);
            j--;
        }
        res = (sum % 2) + res;
        carry = Math.floor(sum / 2);
    }
    return res
};