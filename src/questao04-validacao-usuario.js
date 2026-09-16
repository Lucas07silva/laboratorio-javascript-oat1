function validarUsuario({nome, email, senha}) {
    const erros = [];

    if (!nome||nome.length < 3) {
        erros.push("Nome deve ter pelo menos 3 caracteres");
    }
    
    const posicaoAt=email? email.indexOf('@'): -1;
    const temPontoAposAt = posicaoAt !== -1 && email.includes('.',posicaoAt);

    if(!email || posicaoAt === -1 || !temPontoAposAt){
        erros.push("Email invalido");
    }

    const temNumero = /\d/.test(senha);

    if (!senha || senha.length < 6 || !temNumero) {
        erros.push("Senha deve ter pelo menos 6 caracteres");
    }

    if(erros.length ===0) {
        return {valido: true };
    
    } else {
        return {valido: false, erros: erros};
    }
}
console.log(JSON.stringify(validarUsuario({nome:"al", email: "teste", senha: "123"}), null, 2));
