function square(num) {
  let pattern = "";
  for (let i = 0; i < num; i++) {
    let line = "";
    for (let j = 0; j < num; j++) {
      line += "* ";
    }
    pattern += '\n'
    pattern += line;
  }
  console.log(pattern);
}

square(5)