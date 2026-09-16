function analiseDeNumero (arrayDeNumeros){
    if(!arrayDeNumeros || arrayDeNumeros.length === 0){
      return null;
    }
    const total = arrayDeNumeros.length;
    const maior = Math.max(...arrayDeNumeros);
    const menor = Math.min(...arrayDeNumeros);
    const soma = arrayDeNumeros.reduce((acc, curr) => acc +curr, 0);
    const media = Number((soma / total). toFixed(2));
    const pares = arrayDeNumeros.filter(num => num % 2 ===0). length;
    const impares = arrayDeNumeros.filter(num => num % 2 !==0). length; 

    return{
        total,maior,menor,media,pares,impares
    }
}

console.log(analiseDeNumero([12, 5, 8, 130, 44, 3]))
