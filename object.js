function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = [{
    nome: "Wender",
    notas: [8, 10],
    media: calcMedia
},
{
    nome: "Jackson",
    notas: [6, 8],
    media: calcMedia
}]


var aluno1 = {
    nome: "Jackson",
    notas: [6, 8],
    media: calcMedia

}

console.log(aluno);

console.log(aluno1.nome + " - " + aluno1.media());