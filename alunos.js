// Trabalho aula presencial "Selecionar Alunos e Dividir em Par ou Ímpar"

var numeroAlunos = 5
let index ;
for (index = 0; index <= numeroAlunos; index++ ) {
    if (index === 0 ){
        console.log("Esse numero é Zero")}

    else if (index % 2 == 1){
        console.log(index + ' é Impar')
    }
    else {
        console.log(index + ' é  Par')
    }
}
