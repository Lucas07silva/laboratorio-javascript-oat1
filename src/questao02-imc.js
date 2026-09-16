function calcularIMC (peso = 78.5, altura = 1.75) {
    const imc = peso / (altura * altura);
    return imc;
}
function VerificaoOMS (imc) {
    if(imc < 18.5){
        return {msg: "abaixo do peso"};
    }    
    if(imc >= 18.5 && imc <= 24.9){
        return {msg: "peso normal"};
    }
    if(imc >= 25.0 && imc <= 29.9){
        return {msg: "Sobre peso"};
    }
    if(imc >= 30.0 && imc <= 34.9){
        return {msg: "obesidade grau I"};
    }
    if(imc >= 35.0 && imc <= 39.9){
        return {msg: "obesidade grau II"};
    }
    if(imc >= 40.0){
        return {msg: "obesidade grau III"};
    }
}
const imcCalculado = calcularIMC();
const classificacao = VerificaoOMS(imcCalculado);
console.log ("O Imc é: "+ imcCalculado.toFixed(2), " Classificação: " + classificacao.msg)
