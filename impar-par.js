// Divisor  impar/par
/*
let dividirTime = function (number) {
  let numero = number;
  //
  for (let i = 0; i <= numero; i++) {
    if (numero === 0) {
      console.log("Numero", +numero);
    } else if (i % 2 == 1) {
      console.log("O Numero", +i + " e impar");
    } else {
      console.log("O Numero", +i + " e par");
    }
  }
  return;
};

let inputNumber = dividirTime(1);
*/

let dividirTime = function (number) {
  let numero = number;
  //
  for (let i = 0; i <= numero; i++) {
    if (numero === 0) {
      console.log("Numero", +numero);
    } else if (i % 3 == 1) {
      console.log("O Numero", +i + " verde");
    } else if (i % 3 == 2) {
      console.log("O Numero", +i + " azul");
    } else {
      console.log("O Numero", i + "vermelho");
    }
  }
  return;
};

let inputNumber = dividirTime(9);
