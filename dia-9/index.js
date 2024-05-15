let nome = prompt("insira seu nome:")
let idade = prompt("insira sua idade:")
let peso = prompt("insira seu peso em Kg")
let altura = prompt("insira sua altura:")
let profissao = prompt("qual é a sua profissao:")
 
 console.log("Olá " + nome +  ", voce tem " + idade + " anos, é " + profissao + ", tem " + altura + "m de altura e pesa" + peso + "kg.")

 if(idade >= 18){
    console.log('ta liberado pra tomar uma bera :) ')
 }else{
    console.log('voce nao pode beber ainda meu querido!')
 }