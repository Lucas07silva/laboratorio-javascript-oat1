function contarCaracteres(texto) {
    if (typeof texto !== "string") {
        return "O valor deve ser uma string";
    }

    let vogais = 0;
    let consoantes = 0;
    let espacos = 0;
    let especiais = 0;

    for (const letra of texto) {
        const caractere = letra
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        if (/\s/.test(letra)) {
            espacos++;
        } else if ("aeiou".includes(caractere)) {
            vogais++;
        } else if (/[a-z]/.test(caractere)) {
            consoantes++;
        } else {
            especiais++;
        }
    }

    return {
        vogais,
        consoantes,
        espacos,
        especiais,
        total: texto.length
    };
}

console.log(contarCaracteres("Desenvolvimento de APIs REST!"));
