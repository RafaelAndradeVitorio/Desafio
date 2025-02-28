function verificarNumero(numeroAVerificar, numeroSeq) {
    let sequencia = [0, 1];
    
    for (let i = 2; i < numeroSeq; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }
    
    if(sequencia.includes(numeroAVerificar)){
        console.log("O nomero "+ numeroAVerificar + " existe na sequência fibonacci com " + numeroSeq + " números")
    } else {
        console.log("O nomero "+ numeroAVerificar + " não existe na sequência fibonacci com " + numeroSeq + " números")
    }
    
}

console.log(verificarNumero(1, 10))