function calcularIMC(peso, altura) {
    const imcCalculado = peso / (altura * altura);
    const imcArredondado = Number(imcCalculado.toFixed(2));
    
    let classificacao = "";

    if (imcArredondado < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imcArredondado <= 24.9) {
        classificacao = "Peso normal";
    } else if (imcArredondado <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imcArredondado <= 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (imcArredondado <= 39.9) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    return {
        imc: imcArredondado,
        classificacao: classificacao
    };
}

// Exemplo de chamada:
const resultado = calcularIMC(78.5, 1.75);
console.log(resultado);