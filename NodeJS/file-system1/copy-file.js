const fs =require('fs')

const fileNameInitial ='write.txt'

const fileNameFinal='write2.txt'

fs.copyFile(fileNameInitial,fileNameFinal,(error)=>{
    if(error){
        console.error('No puedo copiar tu archivo',error)
    }
    console.log(`Se ha copiado el archivo ${fileNameInitial}`)

    fs.readFile(fileNameFinal, 'utf8', (error,data)=>{
        if(error){
            console.error('Fallo la lectura del archivo',error)
            return
        }
        console.log('Archivo final:\n',data)
    })
})