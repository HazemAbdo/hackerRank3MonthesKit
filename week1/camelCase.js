//s-->split/c->combine
//m->method/c--class/v-->variable

// S;M;plasticCup()
// C;V;mobile phone
// C;C;coffee machine
// S;C;LargeSoftwareBook
// C;M;white sheet of paper
// S;V;pictureFrame

function processData(data) {
  let inputs = data.split("\r\n");
  inputs.forEach(function (input) {
    let [operation, Type, inp] = input.split(";");
    let output = "";
    if (operation == "S") {
      output = inp
        .replace(/([A-Z])/g, " $1")
        .toLowerCase()
        .trim();
      if (Type == "M") output = output.slice(0, output.length - 2);
    } else {
      let variable = inp.replace(/[/ /]./g, (v) => v.toUpperCase().trim());
      if (Type == "V") output = variable;
      else if (Type == "M") output = variable + "()";
      else output = variable.slice(0, 1).toUpperCase() + variable.slice(1);
    }
    console.log(output);
  });
}

processData("S;M;plasticCup()");
processData("S;C;LargeSoftwareBook");
processData("S;V;pictureFrame");
processData("C;V;mobile phone");
processData("C;C;coffee machine");
processData("C;M;white sheet of paper");
processData("S;V;iPad");
processData("C;M;mouse pad");
processData("C;C;code swarm");
processData("S;C;OrangeHighlighter");
