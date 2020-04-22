//pedir al usuario la cantidad de koders a registar
//pedir tantos nombres de koder como el usuario haya indicado
//guardar cada nombre de cada koder en una colección
//de cada Koder imprimir únicamente el primer nombre

/**
 Algoritmo:

 Declarar la variable kodersAmount
 Asignar el valor de la variable KoderAmount solicitando la cantidad de koders a registrar
 Declarar variable KodersNumber
 Convertir el valor de koderAmount a variable tipo número
 Declarar la variable koderName
 Asignar el valor de koderName con los nombres de los usuarios.
 Declarar koderColletion
 Asignar el valor a koderColletion con el nombre de cada usuario.
 Declarar KoderFirtsName
 Reducir koderColletion a el primer nombre y asignar la variable KoderFirtsName
 imprimir 
 */

var koderAmount;
var KodersNumber
var koderName;
var koderColletion;

koderAmount = prompt("¿Cuántos Koders se van a registrar?")
kodersNumber = parseInt(koderAmount, 10)

koderColletion = []
var i
for (i = 0; i < kodersNumber; i++) {
    koderName = prompt("Ingresa tu nombre")
    koderColletion.push(koderName)
    console.log(koderColletion)
}

koderColletion.forEach(item => {
    subarregloItem = item.split(" ")
    findArray = subarregloItem.slice(0, 1);
    console.log(findArray[0])  
});
