function encontrarMaiorPalavra(frase) {
    if (typeof frase !== "string") {
        return "O valor deve ser uma string";
    }

    const palavras = frase
        .replace(/[^\p{L}\s]/gu, "")
        .split(/\s+/);

    let maiorPalavra = "";

    for (const palavra of palavras) {
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra;
        }
    }

    return {
        palavra: maiorPalavra,
        tamanho: maiorPalavra.length
    };
}

console.log(
    encontrarMaiorPalavra(
        "O desenvolvimento de microsserviços e APIs é essencial."
    )
);
