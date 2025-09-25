
function guerreiro(nome) {

    this.nome=nome;

}

guerreiro.prototype.attack = function() {

    console.log("O guerreiro " + this.nome + " atacou");
}

let guerreiro1 = new guerreiro("Leandro")
let guerreiro2 = new guerreiro("Joaquina")


guerreiro1.attack();
guerreiro2.attack();