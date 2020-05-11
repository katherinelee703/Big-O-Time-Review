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
