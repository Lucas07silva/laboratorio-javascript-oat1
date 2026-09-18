function gerarTokenAleatorio(tamanho = 8, tipo = "alfanumerico") {
    const numeros = "0123456789";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const alfanumerico = letras + numeros;

    let caracteres;

    if (tipo === "numerico") {
        caracteres = numeros;
    } else if (tipo === "letras") {
        caracteres = letras;
    } else if (tipo === "alfanumerico") {
        caracteres = alfanumerico;
    } else {
        return "Tipo de token inválido";
    }

    let token = "";

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(
            Math.random() * caracteres.length
        );

        token += caracteres[indice];
    }

    return token;
}

console.log(gerarTokenAleatorio(8, "alfanumerico"));
console.log(gerarTokenAleatorio(6, "numerico"));
console.log(gerarTokenAleatorio(10, "letras"));
