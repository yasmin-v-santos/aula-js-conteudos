//Utilizando o operador in
const pessoa = {
    primeiroNome: "Yasmin",
    ultimoNome: "Santos",
    idade: 24,
    pais: "Brasil",
}

let exIn = ("idade" in pessoa);

console.log(exIn);

// Criação de objetos aninhados

const pessoa2 = {
    primeiroNome: "Luceny",
    segundoNome: "Vale",
    carros : {
        carro1: "Porsche",
        carro2: "Volkswagen",
        carro3: "Audi",
    },
    motos: {
        moto1: "Ducati",
        moto2: "Royal Enfield",
    },
}

let moto1 = "moto1";

console.log(pessoa2.carro3);
console.log(pessoa2.carros["carro2"]);
console.log(pessoa2["carros"]["carro1"]);
console.log(pessoa2.motos[moto1]);