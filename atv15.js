let veiculos = {
    rodas: 4
}

let novoCarro = Object.create(veiculos)

novoCarro.marca = "ford"

console.log(novoCarro.rodas, novoCarro.marca)