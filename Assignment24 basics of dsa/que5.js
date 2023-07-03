//  5. **Ugly Numbers**

// An **ugly number** is a positive integer whose prime factors are limited to `2`, `3`, and `5`.

// Given an integer `n`, return *the* `nth` ***ugly number***.

// **Example 1:**

// ```
// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
// ```

// **Example 2:**

// ```
// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// ```

// **Constraints:**

// - `1 <= n <= 1690`

function nthUglyNumber(n) {
  const uglyNumbers = [1];
  let index2 = 0;
  let index3 = 0;
  let index5 = 0;

  for (let i = 1; i < n; i++) {
    const nextUglyNumber = Math.min(
      uglyNumbers[index2] * 2,
      uglyNumbers[index3] * 3,
      uglyNumbers[index5] * 5
    );

    uglyNumbers.push(nextUglyNumber);

    if (nextUglyNumber === uglyNumbers[index2] * 2) {
      index2++;
    }
    if (nextUglyNumber === uglyNumbers[index3] * 3) {
      index3++;
    }
    if (nextUglyNumber === uglyNumbers[index5] * 5) {
      index5++;
    }
  }

  return uglyNumbers[n - 1];
}

// Example usage:
console.log(nthUglyNumber(10)); // Output: 12
console.log(nthUglyNumber(1)); // Output: 1
