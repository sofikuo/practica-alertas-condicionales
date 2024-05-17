let pedir_num1 = "Ingrese un numero: ";
let numero1 = prompt(pedir_num1);

let pedir_num2 = "Ingrese otro numero: ";
let numero2 = prompt(pedir_num2);

function multiplicar(a, b) {
    multiplicar = a * b;
    return "El resultado de multiplicar " + numero1 + " y " + numero2 + " es: " + this.multiplicar;
}

console.log(multiplicar(numero1, numero2));