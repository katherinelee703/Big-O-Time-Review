/* 

BONUS Example 1: O(N) Time - Simple Multiplication

The following code computes the product of a & b. Runtime?
O(b)

*/

function prodduct(a, b) {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum;
}

console.log('product: ', prodduct(2, 3));

//=================================================================

/* 

BONUS Example 2: O(N) Time - Power

The following code computes a^b. Runtime?

O(b)

*/

function power(a, b) {
  if (b < 0) {
    return 0; //error
  } else if (b === 0) {
    return 1;
  } else {
    return a * power(a, b - 1);
  }
}

console.log('power: ', power(2, 3)); // 8

//=================================================================

/* 

BONUS Example 3: Constant Time - Modulus Operator

The following computes a % b (a modulus b). Runtime?

How to calculate modulus (i.e. remainder)
x - y * Math.floor(x / y)

9 - 5 = 4
4 * (Math.floor(9 / 5)) 
9 / 5 = 1.8
Math.floor(1.8) = 1
1 * 4 = 4
9 % 5 = 4

*/

function modulus(a, b) {
  if (b <= 0) {
    return -1;
  }
  let result = a - b * Math.floor(a / b);
  return result;
}

console.log('modulus%: ', modulus(9, 5));

//=================================================================

/* 

BONUS Example 4: O(N/M) Time - Simple Division

The following performs integer division, assume nums are positive.
Runtime?

O(a/b)

*/

function div(a, b) {
  6 / 2;
  let count = 0;
  let sum = b;
  while (sum <= a) {
    sum += b;
    count++;
  }
  return count;
}

console.log('division: ', div(33, 11)); // 3

//=================================================================

/* 

BONUS Example 5: O(log(n)) Time - Square Root

The following computes the integer squareroot of a number.
If the number is not a perfect square (has no integer squareroot) then it returns -1. It does this by successive guessing.
If n = 100, it first guesses 50. Too high? try lower - halfway between 1 and 50. What is the runtime?

*/

function squareroot(n) {
  return sqrt_helper(n, 1, n);
}

function sqrt_helper(n, min, max) {
  let guess = Math.floor((min + max) / 2);
  if (guess * guess === n) {
    // found it!!! (base case)
    return guess;
  } else if (guess * guess < n) {
    // too low
    console.log('sqrt guess: ', guess);
    return sqrt_helper(n, guess + 1, max); // try higher
  } else {
    // too high
    console.log('sqrt guess: ', guess);
    return sqrt_helper(n, min, guess - 1); // try lower
  }
}

console.log('squareroot: ', squareroot(121));

//=================================================================

/* 

BONUS Example 6: O(√n) Time - Square Root Another Way

The following computes the [integer] square root of a number. 
If the number is not a perfect square (there is no integer square root), then it returns -1. 
It does this by trying increasingly large numbers until it finds the right value (or is too high). 
Runtime?

*/

function sqr_root(n) {
  for (let guess = 1; guess * guess <= n; guess++) {
    console.log('sqr_root guess: ', guess);
    if (guess * guess === n) {
      return guess;
    }
  }
  return -1;
}

console.log('sqr_root: ', sqr_root(9));

//=================================================================

/* 

BONUS Example 7: O(N) Time - Unbalanced BST

If a binary search tree is not balance, what is the worse case run time to find an element in the tree?

The worst case is that the thing you are looking for is in the very very last of the bottom leaf nodes. 
If the BST is unbalanced to the most extreme degree, it would take O(n) time, 
where n is the total number of nodes in that tree.

*/

//=================================================================

/* 

BONUS Example 8: O(N) Time -  Binary Tree vs BST

You are looking for a specific value in a Binary Tree, but the tree is NOT a binary search tree. 
What is the time complexity of this?

NOTE:
Binary Tree: any node will have at most 2 child nodes.
It is not necessarily sorted in number order.

BST: any node on a left-half subtree is less than root node, 
any node on a right-half substree is greater than root node.

Again, in the worst case, you'd maybe end up searching through every single node since they are not guaranteed to be in any particular order. 
This would be O(n) time.

*/

//=================================================================
