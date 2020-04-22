//crear una función que pida al usuario las propiedades nombre {name}, apellido{lastName}, edad{age} y teléfono{phone} de un koder y crear un objeto {koderObject} con esos datos


const koders = () => {
    var koderObject = new Object();
    let name = prompt("Ingresa tu nombre")
    let lastName = prompt("Ingresa tu apellido")
    let age = prompt("Ingresa tu edad")
    let phone = prompt("Ingresa tu teléfono.")
    koderObject.name= name;
    koderObject.lastName= lastName;
    koderObject.age= age;
    koderObject.phone= phone;
    
    
    console.log(koderObject)
} 

createkoderObject =()=>{
    let name = prompt("Ingresa tu nombre")
    let lastName = prompt("Ingresa tu apellido")
    let age = prompt("Ingresa tu edad")
    let phone = prompt("Ingresa tu teléfono.")
    let koderObject = {name, lastName,age, phone}
    console.log(koderObject)
}

    