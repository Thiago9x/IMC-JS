function calcularIMC (altura, peso){
    return peso / (altura * altura);
}
    function classificarIMC(imc) {
        
        let categoria
        
        if(imc <18.5){
            categoria = "abaixo do peso"
        }else if(imc<25){
            categoria = "com o peso ideal.<span class='azul'> Parabéns</span>"
        }else if(imc<30){
            categoria = "acima do peso"
        }else if(imc<35 ){
            categoria = "obesidade de 1 grau"
        }else if(imc<40 ){
            categoria = "obesidade 2 grau"
        }else{
            categoria = "obesidade 3 grau.<span class='vermelho'> Perigo</span>"
        }
        
    
    return categoria
}
function calculosvalidos(){
    return document.querySelector("form").reportValidity()
}

function exibirResultado(){
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value.replace(",",".")
    const peso = document.getElementById("peso").value .replace(",",".")
    const resultado = document.getElementById("resultado")

    if (calculosvalidos()){
    const imc = calcularIMC(altura, peso)
    const classificacao = classificarIMC (imc)
        resultado.innerHTML = `${nome} seu IMC é ${imc.toFixed(1)} e você está com ${classificacao}`
    }
    else{
        resultado.textContent = "Preencha todos os campos"
    }
}
function capturarEnter(event){
    if (event.key == "Enter"){
        exibirResultado()
    }
}

//Eventos
document.getElementById("calcular").addEventListener("click", exibirResultado)
document.querySelector("form").addEventListener("keypress",capturarEnter)