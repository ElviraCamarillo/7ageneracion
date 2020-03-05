// Tener los valores de x y y, y compararlos
// Si x es mayor que y, mostrar mensaje que lo indique.
// Si x es menor que y, mostrar mensaje que lo indique.

//Algoritmo
//Declarar los valores de x y y 
//Preguntar si x es mayor que y
//Obtener la respuesta de la comparación
//Si x es mayor que y, mostrar el mensaje "x es mayor que y"
//Si x es menor que y, mostrar el mensaje "x es menor que y"

/*if{
    //si algo se cumple
}

else if {
    //si lo anterior no se cumple, pero esto si
}

else{
    //si nada de lo anterior se cumple
}
*/

/*
var x = 9;
var y = 12;

if (x > y) {
    console.log(x, " es mayor que", y);
    console.log(`${x} es mayor que ${y}`); //string interpolation
} else if (x < y) {
    console.log(x, " es menor que ", y);
} else {
    console.log(x, " es menor que ", y);
}
*/

//Ejercicio 2
//Multitplicar 2 valores y verificar si el resultado de la multiplicación es par o non
//Si es par, indicarlo con un mensaje.
//Si es none, indicarlo con un mensaje.

//Algoritmo
//Declarar los valores de x y y 
//Declarar la variable productResult
//Asignar el valor  x * y al productResult
//Declarar la variable productModulus
//Asignar el valor de productResult % 2 a productModulus
//Si el modulo =0, mostrar el mensaje "x y y son par"
//Si el modulo es 1, mostrar el mensaje "x y y son impar"

/* 
var x = 3;
var y = 5;
var productResult;
productResult = x * y;
var productModulus;
var productModulus = productResult % 2;

if (productModulus === 0) {
    console.log(`El resultado de ${x} * ${y}  es par`); //string interpolation
} else {
    console.log(`El resultado de ${x} * ${y} es none`);
}
*/

//Ejercicio 3

//Recibir un número de parte del usuario y calcular el área de un circulo cuyo radio sea igual al número proporcionado.

//Algoritmo
/*
1. Declarar la variable radius que es valor que proporciona el usuario.
2. Asignar constante PI = 3.1416
3. Declarar la variable cicleArea
4. Asignar el valor de radius mediante el método prompt solicitando un número al usuario, radius = prompt("Please enter un number", "Number")
5. Declarar la variable numberRadius
6. Asignar el valor de numberRadius=parseInt(radius, 10), para convertir el tipo de variable a tipo number
7. Asignar el valor a la variale cicleArea = PI * (radius * radius)
6. Imprimir el mensaje "El área del circulo es ${cicleArea}"
*/


var radius
const PI = 3.1416
var cicleArea
radius = prompt("Please enter un number", "Number")
var numberRadius
numberRadius = parseInt(radius, 10)
cicleArea = PI * (radius * radius)








var radius;
const PI = 3.1416;
var cicleArea;
radius = prompt("Please enter un number", "Number");
var numberRadius;
numberRadius = parseInt(radius, 10)
cicleArea = PI * numberRadius * numberRadius
console.log(`El área del circulo es ${cicleArea}`)