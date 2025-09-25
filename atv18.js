

let pessoa = {
    nome: 'Leandro',
    anoNascimento: 2007
}


function apresentar(nome, anoNascimento){

    let idade = 2025 - anoNascimento
    return "Meu nome é " + nome + " e tenho " + anoNascimento + " anos"
    
}

console.log(apresentar(pessoa.nome, pessoa.anoNascimento))