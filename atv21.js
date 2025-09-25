let configuracao = { 
    status: "ativo"
}

Object.freeze(configuracao);

configuracao.status = "inativo";

configuracao.versao = "10.2"

console.log(configuracao)