// Exercício 8:Escreva um algoritmo para ler as dimensões de um triângulo (base e altura), calcular e escrever a área do triângulo.

alert("Triângulo");

let base = parseFloat(prompt("Informe um valor"));
let altura = parseFloat(prompt("Informe um valor"));

let resultado = (base * altura)/2;

alert(`O resultado da área de um triângulo é: ` + resultado)