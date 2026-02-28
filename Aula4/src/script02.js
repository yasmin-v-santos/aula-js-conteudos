//Exemplo de IF Else
// const hora = new Date().getHours();
//const hora = 18;
// const minutos = new Date().getMinutes();
// const horario = String(hora) + ':' + String(minutos);
// let saudacao;

// if (hora > 18) {
//     saudacao = 'Boa noite!';
// } else {
//     saudacao = 'Bom dia!';
// }

// document.getElementById('ex1').innerHTML = saudacao;
// document.getElementById('ex1').///innerHTML = 'Agora são: ' + horario;
// document.getElementById('ex2').innerHTML = `Agora são:  + ${horario}`;

//Exemplo If Else If
const hora = 14;
const minutos = new Date().getMinutes();
const horario = String(hora) + ':' + String(minutos);
let saudacao;

if (hora > 18) {
    saudacao = 'Boa noite!';
} else if (hora > 12) {
    saudacao = 'Boa tarde!';
} else {
    saudacao = 'Bom dia!';
}

document.getElementById('ex1').innerHTML = saudacao;
//document.getElementById('ex1').innerHTML = 'Agora são: ' + horario;
document.getElementById('ex2').innerHTML = `Agora são: ${horario}`;