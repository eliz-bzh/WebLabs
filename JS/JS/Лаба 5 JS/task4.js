function canInsert(num) {
  if (num < 10 || num > 99) {
    return false;
  }

  let sum = 0;

  while (num !== 0) {
    sum += Math.pow(num % 10, 2);
    num = Math.trunc(num / 10);
  }

  return sum % 17 === 0;
}

function calc() {
  let table_body = $("#table_body");
  table_body.empty();

  for (let i = 10; i <= 99; ++i) {
    if (canInsert(i)) {
      markup = `<tr><td>${i}</td></tr>`;
      table_body.append(markup);
    }
  }
}
