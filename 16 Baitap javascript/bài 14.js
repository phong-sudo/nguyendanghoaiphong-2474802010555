function findMissingNumber(arr, n) {
  const expected = (n * (n + 1)) / 2;
  let actual = 0;
  for (let i = 0; i < arr.length; i++) {
    actual += arr[i];
  }
  return expected - actual; // 0 nếu không thiếu số nào
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); // 6
console.log(findMissingNumber([1, 2, 3, 4], 4)); // 0