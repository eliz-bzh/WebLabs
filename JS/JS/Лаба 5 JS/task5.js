function calc() {
  let result = 0;

  for (let i = 1; i <= 2; i += 0.1) {
    result += Math.sin(i);
  }

  $("#result_span").text(`${result.toFixed(2)}`);
}