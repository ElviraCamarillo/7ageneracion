const fs = require('fs')

const newFile='write3.txt'

fs.writeFile(newFile, 'Hola desde node', 'utf8',(error) =>{
    if(error){
        console.log('Hubo un error al escribir el archivo')
        return  
    }
    console.log('Termine de escribir el archivo')
})



