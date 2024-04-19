let num1 = parseInt(prompt("digite o primeiro numero"))
let num2 = parseInt(prompt("digite o segundo numero"))
let opcao = parseInt(prompt("escolha a opção que deseja realizar:" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /;"))

switch(opcao){
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;
    case 4:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;
}