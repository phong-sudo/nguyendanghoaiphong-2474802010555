function calculateGrade(scores) {
  if (scores.length === 0) return "F";
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  const avg = sum / scores.length;

  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
}

console.log(calculateGrade([95, 90, 85])); // A
console.log(calculateGrade([80, 85, 82])); // B
console.log(calculateGrade([50, 40, 60])); // F