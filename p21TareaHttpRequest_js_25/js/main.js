
//Desarrollar un formulario que me permita crear "koders" con los atributos name, phone, email

//Enviar el koder creado al endpoint
//https://javascript-ajax-d0ce6.firebaseio.com/{tu nombre}/koders/.json


const saveKoderToDb = (koderObject) =>{
    //Estamos creando una instancia del objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    //Creamos lo que sucederá cuando la petición se cumpla.
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
            printKoders()
        }
    }
    //abrimos la petición.
    xhttp.open("POST","https://javascript-ajax-d0ce6.firebaseio.com/elvira/koders.json",true)

    //Enviamos la petición.
    xhttp.send(JSON.stringify(koderObject))
    

}
const getKoderData = () =>{
    let name = document.getElementById("koder-name").value
    let phone = document.getElementById("koder-phone").value
    let email = document.getElementById("koder-email").value
    
    let koderObject = {name, phone, email}
    console.log(koderObject)
    saveKoderToDb(koderObject)
    
}


//Cada que registremos un nuevo koder, mostrar la lista completa de koders en una tabla. Cada koder dentro de esa tabla debe contar con un botón para eliminar

const printKoders = () => {
    let kodersArray = []
    let printxhttp = new XMLHttpRequest();

    printxhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            kodersArray = JSON.parse(this.responseText)
            listKoders(kodersArray)
        }
    }
    printxhttp.open("GET","https://javascript-ajax-d0ce6.firebaseio.com/elvira/koders/.json",true)

    printxhttp.send()
    
}

const listKoders = (kodersArray) =>{
    console.log(kodersArray)
    document.getElementById("koders-wrapper").innerHTML = ""
    for(item in kodersArray){
        console.log(kodersArray[item])
        
    }
    let index = 0 
    for(koder in kodersArray){
        let koderName = kodersArray[koder].name
        let koderPhone = kodersArray[koder].phone;
        let koderEmail = kodersArray[koder].email;
        let currentContent = document.getElementById("koders-wrapper").innerHTML;
        let newContent = `
            <tr id='koder-${index}'>
                <td>${index + 1}</td>
                <td><span class="text-uppercase">${koderName}</span></td>
                <td>${koderPhone}</td>
                <td>${koderEmail}</td>
                <td>
                    <div class='btn btn-danger' id='btn-delete' onclick="deleteKoder('${koder}','koder-${index}')">Eliminar</div>
                </td>
            </tr>
            `
        console.log(newContent)
        document.getElementById("koders-wrapper").innerHTML= currentContent + newContent;
        index++
    }
} 

let saveButton = document.getElementById("btn-save-koder")

saveButton.addEventListener("click", function(){
    getKoderData()
    
})



//Al dar clic en ese botón de eliminar, debe borrar el koder seleccionado de la base de datos, y actualizar la tabla con la cantidad de koders restantes

const deleteKoder = (koderId, listId) => {
    console.log(listId)
    document.getElementById(listId).remove()
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.responseText)
            console.log(response)
            printKoders()
        }
    }
    xhttp.open("DELETE",`https://javascript-ajax-d0ce6.firebaseio.com/elvira/koders/${koderId}.json`,true)
    xhttp.send()
} 