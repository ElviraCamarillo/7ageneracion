/* var kodersMatrix = [
    [
        "Israel",
        "Salinas Martínez",
        "5543788096",
        "27-09-1989"
    ],
    [
        "David",
        "Cermeño Moranchel",
        "5512312345",
        "14-11-1995"
    ]
]

function Koder(name,lastname,phone,birthDate){
    this.name = name,
    this.lastname = lastname,
    this.phone = phone,
    this.birthDate = birthDate,

}

kodersMatrix.forEach((dataArray) =>{
    let koderObject = new Koder (...dataArray);
    kodersCollection.push(koderObject);
})

Console.log(kodersCollection)
/* getShortenedData => {
    return DCM - ddmmaa;
}
output "DCM-141195"
 */

 //Practica 19:
//pedir al usuario la cantidad de koders a registrar
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,

//generar un objeto del tipo Koder por cada koder registrado

//guardarlo en una colección que se llame KodersList
//pt2:
//agregar a nuestro constructor un método que permita obtener el promedio del koder
/* 
function Koder(name,lastname, calificacionHTML,calificacionCSS,calificacionJS){
    this.name = name,
    this.lastname = lastname,
    this.calificacionHTML = calificacionHTML,
    this.calificacionCSS = calificacionCSS,
    this.calificacionJS = calificacionJS
    this.average = function (){
       let promedio= (this.calificacionHTML + this.calificacionCSS +this.calificacionJS)/3
        return promedio
    }
}
var kodersList=[];
const registerKoder = () =>{
    let countKoder;
    let numKoder;
    countKoder = prompt("Ingresa la cantidad de koders a registrar")
    numKoder = parseInt(countKoder,10)    
    for (let i=0 ;i < numKoder;i++){
            let name = prompt("Ingresa tu nombre")
            let lastName = prompt("Ingresa tu apellido")
            let calificacionHTML = parseInt(prompt("Ingresa tu calificación HTML"),10) 
            let calificacionCSS = parseInt( prompt("Ingresa tu calificación CSS"),10) 
            let calificacionJS = parseInt(prompt("Ingresa tu calificación JS"),10)
            let dataKoder = new Koder(name,lastName,calificacionHTML,calificacionCSS,calificacionJS)
            kodersList.push(dataKoder)
    } 
    console.log(kodersList)
}
 */

 //Practica 20x: Botanas.
 //Instrucciones: crear un libro de recetas de botanas, y después crear una botana por cada receta en nuestro libro

function  Snack(name,flavor,snackSize){
    this.name=name,
    this.flavor=flavor,
    this.snackSize=snackSize,
    this.slogan = function(){
       alert(`Nuestra botana ${this.name} es la más sabrosa!!!`)   
    }
}
var libroSnack=[
    [
        "botana1",
        "sabor1",
        "25grs"
    ],[
    "botana2",
    "sabor2",
    "30grs"
     ]
]

var listSnack =[];

const makeSnacks =(bookSnack)=>{
    bookSnack.forEach((receta) => {
        let snack = new Snack(...receta) 
        listSnack.push(snack)  
    });
    console.log(listSnack)
}
//makeSnacks(libroSnack)

//Creando un nuevo libro de recetas de botanas.

var newBookSnack=[];
const newSnacks =()=>{
    let countSnack = prompt("¿Cuántas botanas quieres crear?")
    countSnack=parseInt(countSnack)
    let i;
    for (i=0; i <countSnack; i++){
        let name
        let flavor
        let snackSize
        let snackReceta=[]
        name = prompt(`¿Cuál es el nombre de la ${i+1}° botana?`)
        flavor = prompt(`¿Cuál es el sabor de tu ${i+1}° botana?`)
        snackSize = prompt(`¿De qué tamaño es tu ${i+1}° botana?`)
        snackReceta = [name,flavor,snackSize]
        newBookSnack.push(snackReceta)
    }
    makeSnacks(newBookSnack)
}
// 

const sum = products.reduce((accum, product, index ) => {
    return accum + product.price
}, [])

// sumar todos los productos de tipo chip
const sumChip = products.reduce((accum, product, index) => {
    return accum + product.chip

}

)
// sumar todos los productos de tipo beer

