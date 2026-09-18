function distribuirTimes(listaDeNomes, quantidadeDeTimes) {
    if (!Array.isArray(listaDeNomes)) {
        return "A lista de nomes deve ser um array";
    }

    if (
        !Number.isInteger(quantidadeDeTimes) ||
        quantidadeDeTimes <= 0
    ) {
        return "A quantidade de times deve ser um número inteiro positivo";
    }

    if (quantidadeDeTimes > listaDeNomes.length) {
        return "A quantidade de times não pode ser maior que a quantidade de nomes";
    }

    const nomesEmbaralhados = [...listaDeNomes];

    // Fisher-Yates
    for (let i = nomesEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [nomesEmbaralhados[i], nomesEmbaralhados[j]] =
            [nomesEmbaralhados[j], nomesEmbaralhados[i]];
    }

    const times = [];

    for (let i = 0; i < quantidadeDeTimes; i++) {
        times.push([]);
    }

    for (let i = 0; i < nomesEmbaralhados.length; i++) {
        const indiceDoTime = i % quantidadeDeTimes;

        times[indiceDoTime].push(nomesEmbaralhados[i]);
    }

    return times;
}

console.log(
    distribuirTimes(
        ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda"],
        2
    )
);
