function findLongestWord(words) {
  if (words.length === 0) return "";
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i];
  }
  return longest;
}

console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // banana
console.log(findLongestWord(["hello", "world", "this", "is", "great"])); // hello