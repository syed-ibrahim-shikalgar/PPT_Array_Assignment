//  **Question 8**

// For a stream of integers, implement a data structure that checks if the last `k` integers parsed in the stream are **equal** to `value`.

// Implement the **DataStream** class:

// - `DataStream(int value, int k)` Initializes the object with an empty integer stream and the two integers `value` and `k`.
// - `boolean consec(int num)` Adds `num` to the stream of integers. Returns `true` if the last `k` integers are equal to `value`, and `false` otherwise. If there are less than `k` integers, the condition does not hold true, so returns `false`.

// **Example 1:**

// Input
// ["DataStream", "consec", "consec", "consec", "consec"]
// [[4, 3], [4], [4], [4], [3]]
// Output
// [null, false, false, true, false]

// Explanation
// DataStream dataStream = new DataStream(4, 3); //value = 4, k = 3
// dataStream.consec(4); // Only 1 integer is parsed, so returns False.
// dataStream.consec(4); // Only 2 integers are parsed.
//                       // Since 2 is less than k, returns False.
// dataStream.consec(4); // The 3 integers parsed are all equal to value, so returns True.
// dataStream.consec(3); // The last k integers parsed in the stream are [4,4,3].
//                       // Since 3 is not equal to value, it returns False.

class DataStream {
  constructor(value, k) {
    this.stream = [];
    this.value = value;
    this.k = k;
  }

  consec(num) {
    this.stream.push(num);
    if (this.stream.length > this.k) {
      this.stream.shift();
    }

    if (this.stream.length < this.k) {
      return false;
    }

    for (let i = this.stream.length - this.k; i < this.stream.length; i++) {
      if (this.stream[i] !== this.value) {
        return false;
      }
    }

    return true;
  }
}

const ds = new DataStream(4, 3);
console.log(ds.consec(4)); // Output: false
console.log(ds.consec(4)); // Output: false
console.log(ds.consec(4)); // Output: true
console.log(ds.consec(3)); // Output: false