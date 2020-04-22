const fs = require('fs')

const fileName ='write.txt'

fs.appendFile(fileName, '\nSegunda línea', 'utf8', (error)=>{
    if(error){
        console.error('No puedo escribir esta linea',error)
        return
    }
    console.log('Escritura exitosa')
    console.log('----') //propuesta Charles
    fs.readFile(fileName, 'utf8', (error,data)=>{
        if(error){
            console.error('Fallo la lectura del archivo',error)
            return
        }
        console.log('Archivo final:\n',data)
    })
});
