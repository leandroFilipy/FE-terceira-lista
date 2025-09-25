function produto(nome,preco){
    this.nome=nome;
    this.preco=preco;
}

produto.prototype.descrever = function(){
    return "este produto se chama " + this.nome + " e o preço é: " + this.preco
}

let livro = Object.create(produto.prototype)
livro.nome = "fs",
livro.preco = 20
console.log(livro.descrever())

