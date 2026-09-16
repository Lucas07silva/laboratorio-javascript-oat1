function gerarTabuada(numero, limite = 10){
    const tabuada = []

    for (let i = 1; i <= limite; i++){
        const resultado = numero * i;
        tabuada.push(`${numero} x ${i} = ${resultado}`); 
    }

    return tabuada;
}
console.log(gerarTabuada(7, 5));
