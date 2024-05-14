let mediaGeral = 0
let qtDeHomens = 0
let qtDeMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

while(contador <= 10){
    let nota = prompt("digite a nota do" + contador + "º do aluno");
    let sexo = prompt('digite o sexo do aluno (M/F)');

if(sexo == 'M'){
    if(nota > maiorNotaHomens) {
        maiorNotaHomens = nota
    }
    qtDeHomens++
}

if(sexo == 'F' && nota > 7){
    qtDeMulheresAcimaDe7++
}

mediaGeral += nota
contador++
}
 mediaGeral = mediaGeral / 10   

 console.log("a media geral dos alunos foi:" + mediaGeral)
 console.log("a quantidade cadastrada de homens foi:" + qtDeHomens)
 console.log("a quantidade de mulheres com nota acima de 7 foi:" + qtDeMulheresAcimaDe7)
 console.log("a maior nota entre homens foi:" + maiorNotaHomens)
