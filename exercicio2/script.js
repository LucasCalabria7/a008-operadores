let primeiroNumero = Number(prompt("Insira o primeiro número")); //Inserir primeiro numero

let segundoNumero = Number(prompt("Insira o segundo número")); // Inserir segundo numero

let primeiroMaior = primeiroNumero > segundoNumero;
console.log("O primeiro numero é maior que segundo?", primeiroMaior); // Primeiro é maior ?

let primeiroIgual = primeiroNumero === segundoNumero;
console.log("O primeiro numero é igual ao segundo?", primeiroIgual); //Primeiro é igual ?

let divisivel = (primeiroNumero % segundoNumero) === 0;
console.log("O primeiro numero é divisível pelo segundo?", divisivel);  // Primeiro é divisível ?

let divisivel2 = (segundoNumero % primeiroNumero) === 0;
console.log("O segundo numero é divisível pelo primeiro?", divisivel2); // Segundo é divisível ?
