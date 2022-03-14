var scores = [60, 50, 60, 37, 73, 49, 72,
    61, 83, 38, 39, 83, 83, 81,
    87, 64, 83, 63, 72, 73, 82,
    61, 52, 53, 62, 62, 62, 61,
    82, 92, 73, 56, 62, 63, 84, 85];
var highScore = 0;
var output;
for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution#" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}
console.log("Bubbles test: " + scores.length);
console.log("Highest Bubble score: " + highScore);
var bestSolution = [];
for (var i = 0; i < scores.leanth; i++) {
    if (scores[i] == highScore) {
        bestSolution.push(i);
    }
}
console.log("solution with the highest score: " + bestSolution);