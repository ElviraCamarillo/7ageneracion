//Práctica:
//Crear una función ó funciones que permitan al usuario elegir una operación básica, indicar 2 valores, y ejecutar la operación seleccionada. 
//Imprimir el resultado
//output: "La ${operacion} de los dos números que indicaste es: ${resultado}"

/*
 Algoritmos:
    Hacer una función de para cada operación basica.
    Solicitar al usuario elegir una operación básica: suma, resta, división o multiplicación.
    Declarar variable number1
    Declarar variable number2
    Ingresar valores number 1 y number 2
    Ejecutar operación solictada.
    Imprimir  "La ${operacion} de los dos números que indicaste es: ${resultado}"

    Declarar variable num1
    Declarar variable num2
    Elige una operación básica: suma, resta, división o multiplicación.

 */

const operationsSelector = (operationType, number1, number2) =>{
if(operationType === "suma"){
    console.log(`La ${operationType} de los números que indicaste es ${number1 + number2}`)
}
if(operationType === "resta"){
    console.log(`La ${operationType} de los números que indicaste es ${number1 - number2}`)
}
if(operationType === "multiplicación"){
    console.log(`La ${operationType} de los números que indicaste es ${number1 * number2}`)
}
if(operationType === "división"){
    console.log(`La ${operationType} de los números que indicaste es ${number1 / number2}`)
}
else {
    alert("Esa operación no la venimos manejando")
}
console.log(`La ${operationType} de los dos números que indicaste es: ${resultado}`)
}

