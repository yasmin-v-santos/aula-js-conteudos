//Utilização do método charAt()
let texto = "Abacate";
let exemploCharAt = texto.charAt(1);
console.log (exemploCharAt);

//Utilização do método charCodeAt()
let exemploCharCodeAt = texto.charCodeAt(6);
console.log(exemploCharAt);

//Utilização de método codePointAt()
let exCodePointAt = texto.codePointAt();
console.log(exCodePointAt);

//Utilização do método at()
let exAt = texto.at(6);
let exAtComoArray = texto[2];
console.log(exAt);
console.log(exAtComoArray);

//Utilização do método concat()
let texto2 = "Verde";
let texto3 = texto.concat(" ", texto2);
console.log(texto3);

//Utilização do método slice()
let frutras = "Banana, Maça e Uva";
let exSlice = frutras.slice(2, 11);
console.log(exSlice);

//Utilização de toUpperCase() e toLowerCase
let carro = "Gol gti";
let carro2 = "IMPALA";

let exLowerCase = carro2.toLowerCase();
let exUpperCase = carro.toUpperCase();

console.log(exLowerCase);
console.log(exUpperCase);

//Utilização do método isWellFormed()
let saudacao = "Olá, seja bem-vindo!";
let exWellFormed = saudacao.isWellFormed();

console.log(exWellFormed);

//Utilização do método trim()
let thalison = "             O Thalison gosta do Corinthians                                        ";
let exTrim = thalison.trim();
console.log(exTrim);