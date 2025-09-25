function mostrarNumeros(a, b, c) {
    return a + ", " + b + ", " + c +""    
}

let meuArray = [10, 20, 30];

console.log(mostrarNumeros(...meuArray)); // Saída: "10, 20, 30"
