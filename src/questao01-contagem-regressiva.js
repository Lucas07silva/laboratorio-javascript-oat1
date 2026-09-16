function calcularContagemRegressiva(dataFutura) {
    const agora = new Date().getTime();
    const futuro = new Date(dataFutura).getTime();
    
    const diferenca = futuro-agora;

    const segundo = 1000;
    const minuto = segundo*60;
    const hora = minuto*60;
    const dia = hora*24;

    const dias = Math.floor(diferenca/dia);
    const horas = Math.floor((diferenca%dia)/hora);
    const minutos = Math.floor((diferenca%hora)/minuto);
    const segundos = Math.floor((diferenca%minuto)/segundo);

    return {
        dias: dias,
        horas: horas,
        minutos: minutos,
        segundos: segundos,
        texto:`falta ${dias} dias, ${horas}h, ${minutos}m e ${segundos}s`
    }
}
const resultado = calcularContagemRegressiva("2027-01-01T00:00:00");
console.log(resultado);