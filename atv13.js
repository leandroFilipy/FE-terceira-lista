let dadosPessoais = {
    nome: "Leandro",
    idade: 20,
}
let dadosProfissionais = {
    cargo: "chefe",
    empresa: "bah"
}

let funcionarioCompleto = {...dadosPessoais, ...dadosProfissionais}

console.log(funcionarioCompleto)