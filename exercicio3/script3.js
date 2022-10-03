var altura;
var peso;

altura = document.querySelector("#altura")
peso = document.querySelector("#peso")
let botao = document.querySelector(".botao");

calcular_imc  =() => {
    var imc = peso.value / (altura.value * altura.value);
    console.log(imc);
}

