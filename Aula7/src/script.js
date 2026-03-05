// Exemplo de utilização do length em string
let texto = `ABCDEFJHIJKLMNOPQRSTUVWXYZ`
let tamanho = texto.length;

const elemento = document.querySelector(`.ex1`);

elemento.innerHTML = tamanho;

// Exemplo de utilização do caractere de escape
let texto2 = 'Somente a dor \'coletiva\' gera a união';
let texto3 = "Somente a dor \"coletiva\" gera a união.";
let texto4 = 'Somente a dor \\ coletiva gera a união';
let texto5 = 'Somente a dor \\ coletiva gera a união';

// console.log(texto2);
// console.log(texto3);
// console.log(texto4);
// console.log(texto5);

//Exemplo de template string
let nome = "Yasmin Vale"
let idade = 24;
let frase = `Meu nome é ${nome} e tenho ${idade} anos.`;

let frase2 = `Meu nome é " + nome + " e tenho " + idade + " anos."`;

// console.log(frase2);

//Exemplo de adição de HTML com template atring em JS
const elemento2 = document.querySelector('.ex2');
console.log(elemento2);

elemento2.innerHTML = `
  <style>
    .container {
      display: flex;
      justify-content: center;
     gap: 20px;
      background-color: blueviolet;
    }
     
    .container div{
      text-align: center;
      align-content: center;
      color: darkgreen;
      width: 100px;
      height: 100px;
      background-color: purple;
    }
  </style>

  <div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
`;