const fs = require('fs')

const nameDir ='nuevoDirectorio'

fs.readdir(nameDir,(error,file)=>{
    if(error){
        console.error(`No se puede leer la carpeta ${nameDir}`)
        return
    }
    console.log('Tus archivos son;',file)

})