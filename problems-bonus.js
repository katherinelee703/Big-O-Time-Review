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
