//exercicio 1
var temperaturaCelsius = 28;
var temperaturaFahrenheit = (temperaturaCelsius * 9) / 5 + 32;
console.log(
  temperaturaCelsius +
    " graus Celsius correspondem a " +
    temperaturaFahrenheit +
    " graus Fahrenheit."
);
//exercicio 2
var totalEleitores = 1000;
var votosBrancos = 50;
var votosNulos = 30;
var votosValidos = 800;
var percentualBrancos = (votosBrancos / totalEleitores) * 100;
var percentualNulos = (votosNulos / totalEleitores) * 100;
var percentualValidos = (votosValidos / totalEleitores) * 100;
console.log(
  "Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%"
);
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
console.log(
  "Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%"
);
//exercicio 3
var primeiroInteiro = parseInt(prompt("Digite o primeiro inteiro:"));
var segundoInteiro = parseInt(prompt("Digite o segundo inteiro:"));
var terceiroInteiro = parseInt(prompt("Digite o terceiro inteiro:"));

primeiroInteiro = primeiroInteiro + 25;
segundoInteiro = segundoInteiro * 3;
terceiroInteiro = terceiroInteiro * 0.12;
var quartoInteiro = primeiroInteiro + segundoInteiro + terceiroInteiro;
console.log("Resultado do primeiro inteiro após somar 25: " + primeiroInteiro);
console.log("Resultado do segundo inteiro após triplicar: " + segundoInteiro);
console.log(
  "Resultado do terceiro inteiro após modificar para 12% do valor original: " +
    terceiroInteiro
);
console.log(
  "Soma dos valores originais dos três primeiros inteiros: " + quartoInteiro
);
//exercicio 4 e 5
var nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
var nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));

var mediaSemestral = (nota1 + nota2) / 2;
if (mediaSemestral >= 6.0) {
  console.log("Média semestral: " + mediaSemestral.toFixed(2));
  console.log("PARABÉNS! Você foi aprovado.");
} else {
  console.log("Média semestral: " + mediaSemestral.toFixed(2));
  console.log("Você foi REPROVADO! Estude mais.");
}
//exercicio 6
var A = parseFloat(prompt("Digite o valor do lado A:"));
var B = parseFloat(prompt("Digite o valor do lado B:"));
var C = parseFloat(prompt("Digite o valor do lado C:"));

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log("Triângulo equilátero: todos os lados são iguais.");
  } else if (A === B || A === C || B === C) {
    console.log("Triângulo isósceles: possui dois lados iguais.");
  } else {
    console.log("Triângulo escaleno: todos os lados são diferentes.");
  }
}
//exercicio 7
var precoMenosDeDuzia = 0.3;
var precoPeloMenosDuzia = 0.25;

var quantidadeDeMacas = parseInt(prompt("Digite o número de maçãs compradas:"));
var valorTotal;

if (quantidadeDeMacas < 12) {
  valorTotal = quantidadeDeMacas * precoMenosDeDuzia;
} else {
  valorTotal = quantidadeDeMacas * precoPeloMenosDuzia;
}

console.log("Valor total da compra: R$ " + valorTotal.toFixed(2));
//exercicio 8
var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));

var valorMenor, valorMaior;

if (valor1 < valor2) {
  valorMenor = valor1;
  valorMaior = valor2;
} else {
  valorMenor = valor2;
  valorMaior = valor1;
}

console.log("Valores em ordem crescente: " + valorMenor + ", " + valorMaior);
//Exercicio 9
var codigoOrigem = parseInt(prompt("Digite o código de origem do produto:"));

if (codigoOrigem === 1) {
  console.log("Região: Sul");
} else if (codigoOrigem === 2) {
  console.log("Região: Norte");
} else if (codigoOrigem === 3) {
  console.log("Região: Leste");
} else if (codigoOrigem === 4) {
  console.log("Região: Oeste");
} else if (codigoOrigem === 5 || codigoOrigem === 6) {
  console.log("Região: Nordeste");
} else if (codigoOrigem === 7 || codigoOrigem === 8 || codigoOrigem === 9) {
  console.log("Região: Sudeste");
} else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
  console.log("Região: Centro-Oeste");
} else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
  console.log("Região: Nordeste");
} else {
  console.log("Produto Importado");
}
//exercicio 10
var numero = parseInt(prompt("Digite um número inteiro:"));
for (var i = 0; i < 10; i++) {
  console.log(numero);
}
//exercicio 11
while (true) {
  var valor = parseInt(
    prompt("Digite um valor inteiro (ou insira 0 para sair):")
  );

  if (valor <= 0 || isNaN(valor)) {
    console.log("Leitura encerrada.");
    break;
  }

  if (valor % 2 === 0) {
    console.log(valor + " é PAR.");
  } else {
    console.log(valor + " é ÍMPAR.");
  }
}
//exercicio 12
for (var i = 1000; i <= 1999; i++) {
  if (i % 11 === 5) {
    console.log(i);
  }
}
//exercicio 13
var N = parseInt(prompt("Digite um valor para N:"));

for (var i = 1; i <= N; i++) {
  for (var j = 1; j <= N; j++) {
    console.log(j + " x " + i + " = " + i * j);
  }
  console.log();
}
//exercicio 14
var soma = 0;
var contador = 0;
var numero = parseFloat(
  prompt("Digite um número decimal (digite 0 para encerrar):")
);

while (numero !== 0) {
  soma += numero;
  contador++;
  numero = parseFloat(
    prompt("Digite um número decimal (digite 0 para encerrar):")
  );
}

if (contador > 0) {
  var media = soma / contador;

  console.log(
    "A média aritmética dos números digitados é: " + media.toFixed(2)
  );
}
//exercicio 15
var somaProdutos = 0;
var somaPesos = 0;
var numero;
var peso;

numero = parseFloat(
  prompt("Digite um número decimal (digite 0 para encerrar):")
);
while (numero !== 0) {
  peso = parseFloat(
    prompt("Digite o peso correspondente ao número (digite 0 para encerrar):")
  );

  somaProdutos += numero * peso;
  somaPesos += peso;

  numero = parseFloat(
    prompt("Digite um número decimal (digite 0 para encerrar):")
  );
}

if (somaPesos > 0) {
  var mediaPonderada = somaProdutos / somaPesos;

  console.log(
    "A média ponderada dos números e pesos digitados é: " +
      mediaPonderada.toFixed(2)
  );
}
//exercicio 16
var numero = 101;
var contador = 0;

function ehPrimo(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let divisor = 5;
  while (divisor * divisor <= num) {
    if (num % divisor === 0 || num % (divisor + 2) === 0) return false;
    divisor += 6;
  }

  return true;
}

while (contador < 50) {
  if (ehPrimo(numero)) {
    console.log(numero);
    contador++;
  }
  numero++;
}
