let nome
let idade
let temCarta = false
let temCarro = false

nome = prompt("insira seu nome")
idade = parseInt(("insira sua idade"))
let opcaoCarteira = prompt("voce tem carteira de motorista? (s/n)")
if (opcaoCarteira === 's'){
    temCarta = true
}

let opcaoCarro = prompt("voce tem carro? (s/n)")
if (temCarro == 's') {
    temCarro = true
}

if (idade <18 || !temCarta) {
    console.log(nome + ", voce nao pode dirigir")
}else if (idade >= 18 && temCarta && !temCarro) {
    console.log(nome + ", voce pode dirigir mas nao tem carro")
}else {
    console.log(nome + ", voce sera o motorista!")
}
