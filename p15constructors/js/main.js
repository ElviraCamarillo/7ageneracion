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

 //TAREA
//pedir al usuario la cantidad de koders a registrar
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,

//generar un objeto del tipo Koder por cada koder registrado

//guardarlo en una colección que se llame KodersList
//pt2:
//agregar a nuestro constructor un método que permita obtener el promedio del koder

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
            let calificacionCSS = parseInt( prompt("Ingresa tu calificación CSS")) 
            let calificacionJS = parseInt(prompt("Ingresa tu calificación JS"))
            let dataKoder = new Koder(name,lastName,calificacionHTML,calificacionCSS,calificacionJS)
            kodersList.push(dataKoder)
    } 
    console.log(kodersList)
}


