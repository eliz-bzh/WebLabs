function calc_value(x) {
  return Math.pow(x, 3) + 2 * Math.pow(x, 2) - 4 * x + 7;
}

function calc(form) {
  let a = Number(form.a.value);
  let b = Number(form.b.value);
  let h = Number(form.h.value);

  if (isNaN(a)) {
    alert("Значение а некорректное");
    return;
  }
  if (isNaN(b)) {
    alert("Значение b некорректное");
    return;
  }
  if (isNaN(h)) {
    alert("Значение h некорректное");
    return;
  }

  if (a > b) {
    alert("Значение а должно быть меньше b");
    return;
  }

  if (h === 0) {
    alert("Значение h не может быть равным 0");
    return;
  }

  let table_head = $("#table_head");
  table_head.empty();
  let table_body = $("#table_body");
  table_body.empty();

  let markup = "<th>x</th><th>y</th>";
  table_head.append(markup);

  for (; a <= b; a += h) {
    markup = `<tr><td>${a}:</td><td>${calc_value(a)}</td></tr>`;
    table_body.append(markup);
  }
}
