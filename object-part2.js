// function criarAluno(nome, n1, n2) {
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function () {
//             return (this.nota1 + this.nota2) / 2;
//         }
//     }
// }

function aluno(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function () {
        return (this.nota1 + this.nota2) / 2
    }


}

// var turma = [
//     criarAluno("Wender", 8, 7.5),
//     criarAluno("Louíse", 7, 4),
//     criarAluno("Simone", 8, 7.5)
// ]

// var aluno = turma[2];

var a = new aluno("Wender", 8, 7.5);
var b = new aluno("Louíse", 9, 8.5);

console.log(a,b);

// turma.forEach(function (elemento){
//     console.log(elemento.nome + " - " + elemento.media());
// })