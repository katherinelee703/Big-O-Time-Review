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

/* 

BONUS Example 9: O(n^2) Time - Append To New (by making new array)

The appendToNew method appends a value to an array by creating a new, longer array, and returning this longer array. You've used the appendToNew method to create a copyArray function that repeatedly calls appendToNew. How long does copying an array take? O(n^2) where n is length of array. 1st call to appendToNew takes 1 copy. The 2nd call takes 2 copies, 3rd call takes 3 copies... the total time will be the sum of 1....n which is actually n^2

*/

function copyArray(array) {
  let copy = [];
  for (let value of array) {
    copy = appendToNew(copy, value);
  }
  return copy;
}

function appendToNew(array, value) {
  //copy all elements over to new array
  let bigger = [];
  for (let i = 0; i < array.length; i++) {
    bigger[i] = array[i];
  }

  //add new element
  bigger[bigger.length] = value; // or bigger.push(value);
  return bigger;
}

console.log('copyArray calling appendToNew: ', copyArray([1, 2, 3, 4]));

//=================================================================

/* 

BONUS Example 10: O(log n) Time - Sum Digits

The following code sums the individual digits of a number. Runtime?

NOTE: 
Modulo Method
To find 3 mod 10 using the Modulo Method, we first divide the Dividend (3) by the Divisor (10).

Second, we multiply the Whole part of the Quotient in the previous step by the Divisor (10).

Then finally, we subtract the answer in the second step from the Dividend (3) to get the answer. 
Here is the math to illustrate how to get 3 mod 10 using our Modulo Method:

3 / 10 = 0.3
0 x 10 = 0
3 - 0 = 3

Thus, the answer to "What is 3 mod 10?" is 3.

Let the length in number of digits be d? for a number that is d digits long, the number can have a possible value up to (but not including) d^10 (10,000, which is actually 9,999). We want to find n.

If n = d^10, with circle method you see that d = log n.

∴  O(log n) time.

*/

function sumDigits(n) {
  let sum = 0;
  while (n >= 1) {
    sum += n % 10;
    console.log('sum: ', sum);
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log('modddd', 3 % 10);
console.log('sum of digits: ', sumDigits(345)); //12

//=================================================================

/* 

BONUS Example 11: O(kc^k) Time - Print Sorted Strings

The following code prints all strings of length K where the characters are in sorted order. It does this by generating all strings of length K and then checking if each is sorted. What is the runtime?

O(kc^k), where k is the length of the string, and c is the number of characters in the alphabet.
It takes O(c^k) time to generate each string
Then we have to check that each of these strings is sorted (we are not sorting them, we are just checking IF they ARE sorted already, worst case is you have to check till the last letter, k, the length of the string), so this check takes O(k) time.

Which means the total is c^k * k, or O(kc^k) time.

*/

let numChars = 26;

function printSortedStrings(remaining) {
  printSortedStringss(remaining, '');
}

function printSortedStringss(remaining, prefix) {
  if (remaining === 0) {
    if (isInOrder(prefix)) {
      console.log(prefix);
    } else {
      for (let i = 0; i < numChars; i++) {
        let char = ithLetter(i);
        console.log(remaining - 1, prefix + char);
      }
    }
  }
  function isInOrder(str) {
    for (let i = 0; i < str.length; i++) {
      let prev = ithLetter(str.charAt(i - 1));
      let current = ithLetter(str.charAt(i));
      if (prev > current) {
        return false;
      }
    }
    return true;
  }
  function ithLetter(i) {
    return i;
  }
}
// currently this code doesn't work???
console.log('print sorted strings: ', printSortedStrings('hello'));
// not sure how to translate this code from java to js???

//=================================================================

/* 

BONUS Example 12: O(b log b + a log b) Time, INTERSECTION OF 2 ARRAYS

The following code computes the intersection (the number of elements in common) of two arrays. It assumes that neither array has duplicates. It computes the intersection by sorting one array (array b) and then interating through array a checking (via Binary Search) if each value is in B. Runtime?

First we have to sort array b, which takes O(b log b) time.
Next, for each element in a, we do a binary search in O(log b) time -> this means that it is a * log b. 
Put these 2 parts together and you get b log b + a log b.
Therefore O(b log b + a log b) time... doesn't reduce further

*/

// Merge Sort Implentation (Recursion)
// Helper Func for Intersection

function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return mergeSort(mergeSort(left), mergeSort(right));
}

const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === array[middleIndex]) {
      return array[middleIndex];
    }
    if (target > array[middleIndex]) {
      console.log('Searching the right side of Array');
      startIndex = middleIndex + 1;
    }
    if (target < array[middleIndex]) {
      console.log('Searching the left side of array');
      endIndex = middleIndex - 1;
    } else {
      console.log('Not Found this loop iteration. Looping another iteration.');
    }
  }

  console.log('Target value not found in array');
};

function intersection(a, b) {
  let newB = mergeSort(b);
  let intersects = 0;
  for (let x of a) {
    if (binarySearch(newB, x) >= 0) {
      intersects++;
    }
  }
  return intersects;
}
// not sure how to translate java to js here, so this doesn't work now...
console.log('intersection two-sum?:', intersection([1, 2, 3, 4], [2, 3, 4, 5]));

//======

// this is the only way *I* know how to find intersections
function intersect(array1, array2) {
  return array1.filter((value) => array2.includes(value));
}
// this works!
console.log('intersect: ', intersect([1, 2, 3], [2, 3, 4, 5]));
