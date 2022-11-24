function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criarAluno("Wender", 8, 7.5),
    criarAluno("Louíse", 7, 4),
    criarAluno("Simone", 8, 7.5)
]

var aluno = turma[2];

turma.forEach(function (elemento){
    console.log(elemento.nome + " - " + elemento.media());
})