function calc() {
  let amount = 20;
  let year = 1626;
  const end_year = 2010;

  for (; year <= end_year; year++) {
    amount += (amount / 100) * 5;
  }

  $("#cash_amount_span").text(`${amount.toFixed(2)}$`);
}
