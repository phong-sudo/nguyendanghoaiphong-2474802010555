function isAscending(arr) {
  if (arr.length <= 1) return false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) return false;
  }
  return true;
}

console.log(isAscending([1, 2, 3, 5])); // true
console.log(isAscending([3, 2, 1])); // false
console.log(isAscending([5])); // false