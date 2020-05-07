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
