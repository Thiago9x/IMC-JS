const nome = document.getElementById('nome');
const metros = document.getElementById('altura');
const peso = document.getElementById('peso');
const butao = document.getElementById('botao');
const calculo = document.getElementById('resultado');

function test() {
    let result = parseFloat(peso.value) / ( parseFloat(metros.value) * parseFloat(metros.value) );
    calculo.textContent = nome.value + " seu IMC é: " + result.toFixed(2);
}

butao.addEventListener("click", test);
