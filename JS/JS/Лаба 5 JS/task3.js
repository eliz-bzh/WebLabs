function calc(form) {
  let a = Number(form.a.value);
  let b = Number(form.b.value);
  let x = Number(form.x.value);

  if (isNaN(a)) {
    alert("Значение а некорректное");
    return;
  }
  if (isNaN(b)) {
    alert("Значение b некорректное");
    return;
  }
  if (isNaN(x)) {
    alert("Значение x некорректное");
    return;
  }

  a = Math.trunc(a);
  b = Math.trunc(b);
  x = Math.trunc(x);

  if (x === 0) {
    alert("Значение x не может быть равным 0");
    return;
  }

  let table_body = $("#table_body");
  table_body.empty();

  for (; a <= b; a++) {
    if (a % x === 0) {
      markup = `<tr><td>${a}</td></tr>`;
      table_body.append(markup);
    }
  }
}
