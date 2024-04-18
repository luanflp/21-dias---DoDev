let comFome = prompt("esta com fome? S/N")
let temDinheiro = prompt("tem dinheiro? S/N")
let restAberto = prompt("restaurante aberto? S/N")

if (comFome === 'N' || temDinheiro === 'N') {
    console.log("Hoje a janta sera em casa!!!")
}else if(temDinheiro === 'S' && restAberto === 'S'){
    console.log("hoje a janta sera no restaurante preferido!!!")
}else{
    console.log("peça um delivery!!!")
}