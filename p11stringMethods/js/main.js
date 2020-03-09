//Practica 1

//Obtener el nombre completo del usuario e indicarle cuántos caracteres tiene sus nombre.


//Practica 2

//Obtener el nombre completo del usuario.
//Contar cuántos caracteres tiene.
//Si su nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es muy corto
//Si tiene más de 15 caracteres, indicarle mediante un mensaje que su nombre es muy largo

//Practica 3

//Obtener el nombre completo del usuario.
//Contar cuántas vocales tiene.

/* 
//Práctica 1
var userName;
userName = prompt("Por favor, ingrese su nombre.")
console.log(userName)

//Práctica 2
var numberCharacteres;
numberCharacteres = userName.length;
if (numberCharacteres < 15) {
    console.log("Tu nombre es muy corto")

} else {
    console.log("Tu nombre es muy largo")
}
//Practica 3
var vowels
vowels = userName.match(/[aeiou]/gi).length
console.log(vowels)

*/

/*
Recibir una palabra del usuario, y formar una nueva palabra usando las dos primeras y las dos últimas
letras de esa palabra. Si la palabra tiene menos de 5 caracteres, enviar un mensaje de error al usuario indicándoselo
pedir al usuario nombre y edad, y mostar un mensaje que diga "hola, soy {nombre} y tengo {edad} años"
Del texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la palabra "Koder", y mostrar el mensaje de nuevo al usuario
*/

//Practica 4

//Algoritmo
/*
Declarar la variable word
Asignar el valor de word solicitando al usuario escribir una palabra
Si word es menor a 5 caracteres imprime "Error"
Declarar variable newWord
Asignar el valor de nwerWord = primeras dos letras  + ultimas dos letras de word 
Declarar variable name
Declarar variable age
Asignar el valor de name solicitando al usuario ingrese su nombre
Asignar el valor de age solicitando al usuario ingrese su edad.
Imprimir mensaje "hola, soy {nombre} y tengo {edad} años"
Declarar constante text = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, 
y cada estudiante complementa al estudiante que tiene a su lado"
Contar cuantas veces se repite estudiante en text
Declarar variable newText 
Asignar el valor de newText reemplazando estudiante por koder
Imprimir valor de newText

*/

var word;
var newWord;
word = prompt("Por favor, ingrese una palabra")
var wordL;
wordL = word.legth;
if (wordL < 5) { console.error("Necesitamos una palabra más grande") }
var newWord1;
var newWord2;
newWord1 = word.substr(0, 2)
newWord2 = word.substr(word.length - 2, word.length - 1)
newWord = newWord1.concat(newWord2)
console.log(newWord)

var name
var age
name = prompt("Ingresa tu nombre")
age = prompt("Ingresa tu edad")
console.log(`Hola, soy ${name} y tengo ${age} años`)

var text = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
var repetWord
var newText
repetWord = text.match(/estudiante/g).length
console.log(`La palabra estudiante se repite: ${repetWord}
    veces en el texto`)
newText = text.replace(/estudiante/g, "koder")
console.log(newText)