/* 

BIG O TIME - THE CHAPTER FROM CRACKING THE CODING INTERVIEW

I have "translated" the code examples from Java to JavaScript where possible 

These were all tested on repl.it (hence the console.logs everywhere)
please see: https://repl.it/@khd25/CtCI-Big-O-Chapter-Examples to run them more easily!

====================================================================

Example 1:  O(2ⁿ) Time

Generally when you have a recursive function that makes multiple calls, the runtime will often (but not always) look like: O(branchesᵈᵉᵖᵗʰ), where branches is the number of times each recursive call branches. in this case, the example is O(2ⁿ)

*/

const exampleOf2ToTheNTime = (num) => {
  if (num <= 1) {
    return 1;
  }
  return exampleOf2ToTheNTime(num - 1) + exampleOf2ToTheNTime(num - 1);
};

console.log('example of 2^N time: ', exampleOf2ToTheNTime(4));

//                     (4)
//                   returns
//             (3)      +      (3)
//           returns         returns
//         (2)  +  (2)  +  (2)  +  (2)
//       returns returns returns returns
// base  (1)+(1)+(1)+(1)+(1)+(1)+(1)+(1) = 8

// returns 8

//=================================================================

/* 

Example 2: O(N) Time

The fact that we iterate through the array twice doesn't matter. 
It is really N + N, so 2N, but in Big O, we drop the constants. 
∴ it is just O(N)

*/

const sumAndProduct = (arr) => {
  sum = 0;
  product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return console.log(
    'sumAndProduct -> sum: ' + sum + ', ' + 'product: ' + product
  );
};

sumAndProduct([1, 2, 3]);

//=================================================================

/* 

Example 3: O(N²) Time

The inner for loop runs N times for every N times of the outer for loop. 
∴ the runtime is O(N^2) Time

{Generally, nested for loops on arrays of the same length will be O(N²)}

*/

const printPairsAllowRepeats = (arr) => {
  let finalSet = ['printed pairs:'];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      finalSet.push(arr[i] + ', ' + arr[j]);
    }
  }
  return finalSet;
};

console.log(printPairsAllowRepeats([1, 3, 5]));

//=================================================================

/* 

Example 4: another O(N²) Time

A quick trick is to see that there are nested for loops.
But the loops are different lengths.
Ultimately, there are N² total pairs. 
Roughly half will have j > i.
So O(N² / 2). or O(1/2 N²). 
Basically it looks like half/skinny version of an N x N matrix right?
Drop the constant and it's still O(N²).

*/

const printUnorderedPairs = (arr) => {
  let finalSet = ['printed unordered pairs:'];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      finalSet.push(arr[i] + ', ' + arr[j]);
    }
  }
  return finalSet;
};

console.log(printUnorderedPairs([2, 4, 6]));

//=================================================================

/* 

Example 5: O(N*M) Time

* It is an extremely common mistake to think this is O(N²) Time because of the 2 for loops.

But the loops each take a different array. 

If N is the arr1.length & M is the arr2.length, the work done is 
O(N*M) or O(NM);


*/

const printUnorderedPairs2Arrays = (arr1, arr2) => {
  let finalSet = ['printed unordered pairs from 2 arrays:'];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] < arr2[j]) {
        finalSet.push(arr1[i] + ', ' + arr2[j]);
      }
    }
  }
  return finalSet;
};

console.log(printUnorderedPairs2Arrays([1, 2, 3], [1, 2, 3]));
console.log(printUnorderedPairs2Arrays([1, 2, 3], [4, 5, 6]));

//=================================================================

/* 

Example 6: another O(N*M) Time

Compared to Example 5, nothing has really changed here. 
The K loop is doing "constant work" - it just does same task for every J loop.
Even though it looks like it ought to be O(10*N*M), we drop constants.
It is still O(N*M)

*/

const printUnorderedPairs2Arrays3Loops = (arr1, arr2) => {
  let finalSet = ['printed unordered pairs from 2 arrays weird:'];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < 10; k++) {
        finalSet.push(arr1[i] + ', ' + arr2[j]);
      }
    }
  }
  return finalSet;
};

console.log(printUnorderedPairs2Arrays3Loops([1, 2, 3], [1, 2, 3]));

//=================================================================

/* 

Example 7: O(N) Time

Although this for loop will only run for half of the array length 
it is still O(N) time. because O(1/2N) drops constant to be O(N)

*/

const reverseHalf = (arr) => {
  let final = [];
  for (let i = 0; i < arr.length / 2; i++) {
    let other = arr.length - i - 1;
    let temp = arr[i];
    arr[i] = arr[other];
    arr[other] = temp;
    final.push(arr[i]);
  }
  return final;
};

console.log('reverse half an array: ', reverseHalf([1, 2, 3, 4, 5, 6]));

//=================================================================

/* 

Example 8: Multiple Choice:

Which of the following are equivalent to O(N). Why?

(o) - O(N + P), where P < N/2
(o) - O(2N)
(o) - O(N + log N)
(x) - O(N + M)

Explanations:

- O(N + P), where P < N/2: N is the dominant term so we drop the P 
- O(2N): drop the constant
- O(N + log N): N is the dominant term, so drop log N

- O(N + M): there is no established relationship between N and M so we must retain both variables in there

*/

//=================================================================

/* 

Example 9: O(a*s(log a + log s)) Time - an ugly, unreducable one

Imagine an algorithm that takes an array of strings, and first it sorts the strings, and then sorts the full array. What is the runtime?

Let s be the longest (worst case) string
Let a be the array's length

- Sorting each string takes O(s log s) time
- Now we have to do that for every string. So O(a*s log s)
- In order to sort all the strings, you have to compare them, which    takes O(s) time in the worse case. 
- There are O(a log a) comparisons to make, so it takes O(s*a log a)
- You have to add up the O(a*s log s) and O(s*a log a);

You get O(a*s(log a + log s)). You cannot simplify it further.


*/

//=================================================================

/* 

Example 10: O(N) Time - with Nodes & Binary Search Tree

*Just because this is a BST doesn't mean there'll be a log in it!

Think of it as this code touching each node in the tree once, and it does a constant amount of work each time it touches a node (excluding the recursive calls).
Since the runtime is linear for each node, if there are N nodes, then runtime is O(N)

Let's look more (the below explanation is really complex tho. Just use the above one, it makes easier sense):

In Example 0 we said normally runtime for recursive functions have multiple branches - and it is usually O(branches^depth). When there are 2 branches we have 0(2^N); yikes that seems bad!

So, we have to look at what it's exponential with respect to...

What is depth? A balanced BST will have a depth of roughly log NM

So, using O(branches^depth) we get O(2^log N);

Let's refer to circle method to see what log base 2 means:

2^P = Q    ->    log₂Q = pairs

Have P = 2^log N
      -> log₂P = log₂N
      -> P = N
      => 2^log N = N
      wow math.

Therefore runtime is O(N), where N is number of nodes.

*/

function sum(node) {
  if (node == null) {
    return 0;
  }
  return sum(node.left) + node.value + sum(node.right);
}

//=================================================================

/* 

Example 11: O(√N) Time - Prime Number Teller

We know that the work inside the loop is constant time.
We need to know then how many iterations the loop will run for in the worst case scenario.

The for loop will start at 2, and will stop when x * x = num.
This is the same as saying the iterations will stop once they have iterated the √ of N times. 

That is why this is O(√N)


*/

function isPrime(num) {
  for (let x = 2; x * x <= num; x++) {
    //this is key: x * x <= num...
    if (num % x === 0) {
      return false;
    }
  }
  return true;
}

console.log('isPrime: ', isPrime(587));

//=================================================================

/* 

Example 12: O(N) Time - Factorials!

This recursion is "straight"
ie, it will run N number of times, where N = num
so its from n to n-1, to n-2 .... down until 1. 
∴ O(N) 

*/

function factorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(4)); //this computes 4! or (4 * 3 * 2 * 1)...

//=================================================================

/* 

Example 13: O(n^2 * n!) Time - String Permutations

Step 1: find how many possible permutations (calling base case):
For a 7 letters word, on the 1st try you pick from 7 letters, 
on the 2nd try you pick from 6 letters, ....
The number of permutations is 7! (7 factorial)

Step 2: We need to count the number of times permutation is called (not in the base case)
So if the # of permutations is 7!, we can picture a call tree.
There are n! leaves on the tree. Each leaf is attached to a path of length n.
∴ We know there will be no more than n * n! nodes (function calls) in this tree.

Add O(n) work because each character needs to be printed

Add  O(n) workc due to the string concatenation. Observe the the sum of the lengths of remainder, prefix, and str.charAt(i) will always be n.

Each Node in the call tree ∴ corresponds to O(n) work
So far it is O(n*n*n!), this can be simplified to

O(n^2 * n!) runtime

*/

let findPermutations = (string) => {
  if (!string || typeof string !== 'string') {
    return 'Please enter a string';
  }

  if (!!string.length && string.length < 2) {
    return string;
  }

  let permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) != i) continue; //this deletes duplicates, because if a character happens again, .indexOf(char) will find the first index (instance) of that character, and if it doesn't match i, it will go on to the next letter, thus almost halving the output when you have repeater characters in the input string as compared to not adding this line.

    let remainder = string.slice(0, i) + string.slice(i + 1);

    for (let permutation of findPermutations(remainder)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
};

console.log('permutations: ', findPermutations('aabc'));

/*

* NOTE: MDN Definition of "For... Of Loops":

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c" 

*/

//=================================================================

/* 

Example 14: O(2^N) Time - Find the Nth Fibonacci Number

Generally speaking, when you're looking at an algorithm with multiple recursive calls, you'll end up with exponential runtime

Remember the rule of thumb -> O(branches^depth) -> O(2^N)

*/

function fib(num) {
  if (num <= 0) return 0;
  else if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(
  'Nth Fibonacci Number (counting from 0, not 1, like Nth index of fib nums): ',
  fib(6)
);

//0, 1, 1, 2, 3, 5, 8, 13.... fib nums
//0, 1, 2, 3, 4, 5, 6, 7..... indexes

//=================================================================

/* 

Example 15: O(2^N) Time - Print all Fibonacci Numbers from 0 to num

console.log is doing constant work
it is calling the same amount of things as fib -- so it is also 
O(2^N)

*/

function printAllFib(num) {
  for (let i = 0; i < num; i++) {
    console.log("fib num's index: " + i + ', fib num: ' + fib(i));
  }
}

printAllFib(7);

//=================================================================

/* 

Example 16: O(N) Time - BETTER Print all Fibonacci Numbers from 0 to num 
USING CACHING!!

MEMOization is a very common optimization technique for exponential runtime recursive algorithms

Look at what the code below does:

fib(1) -> return 1
fib(2)
      fib(1) -> return 1
      fib(0) -> return 0   // 1 + 0 = 1
      store 1 at memo[2]
fib(3)
      fib(2) -> lookup memo[2] -> return 1
      fib(1) -> return 1                    // 1 + 1 = 2
      store 2 at memo[3]
fib(4)
      fib(3) -> lookup memo[3] -> return 2
      fib(2) -> lookup memo[2] -> return 1  // 2 + 1 = 3
      store 3 at memo[4]
fib(5)
      fib(4) -> lookup memo[4] -> return 3
      fib(3) -> lookup memo[3] -> return 2 // 3 + 2 = 5
      store 5 at memo[5]


For each call up to fib(i) we have already computed and stored the values for fib(i-1) and fib(i-2) in a constant lookup time memo (a cache). We will do a constant amount of work for N times 

∴ O(N)

*/

function allFib(num) {
  let memo = [num + 1];
  for (let i = 0; i < num; i++) {
    console.log('memo fib index: ' + i + ', fib num: ' + fib(i, memo));
  }
}

function fibMemo(num, memo) {
  if (num <= 0) return 0;
  else if (num === 1) return 1;
  else if (memo[num] > 0) return memo[num];
  memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
  return memo[num];
}

allFib(7);

//=================================================================

/* 

Example 16: O(log N) Time - Print Powers of 2 from 1 to num

Since we will call recursively every time we divide num in half, that leads us to log N time. 
It does constant work on every call, so don't need to add any more N.

*QUICK FACT: there are log N powers of 2 between 1 and N.

Think about it another way: 
Each time N doubles, the number of recursive calls to powersOf2 increases by 1. 
The number of times you can double 1 until you get to N, matches the x in this equation: 

2^x = n.

∴  x = log N
wow math.

*/

function powersOf2(num) {
  if (num < 1) {
    return 0;
  } else if (num === 1) {
    console.log('current = ', 1);
    return 1;
  } else {
    let previous = powersOf2(Math.floor(num / 2));
    // needs Math.floor or it will log everything as zeroes
    let current = previous * 2;
    console.log('current = ', current);
    return current;
  }
}

let usedNum = 32;
let usedNum2 = 150;
const try1 = powersOf2(usedNum);
const try2 = powersOf2(usedNum2);
console.log('try1 given ', usedNum, try1);
console.log('try2 given ', usedNum2, try2);

//=================================================================
