/* 

BIG O TIME - THE CHAPTER FROM CRACKING THE CODING INTERVIEW

I have "translated" the code examples from Java to JavaScript where possible 

These were all tested on repl.it (hence the console.logs everywhere)
please see: https://repl.it/@khd25/CtCI-Big-O-Chapter-Examples to run them more easily!

====================================================================

Example 1:  O(2^N) Time

Generally when you have a recursive function that makes multiple calls, the runtime will often (but not always) look like: O(branches^depth), where branches is the number of times each recursive call branches. in this case, the example is O(2^N)

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
So it is just O(N)

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
