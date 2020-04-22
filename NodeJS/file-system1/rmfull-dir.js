const fs = require('fs')

const directoryDeleted = (filePath) => {
    if (fs.existsSync(filePath)) {
        console.log(` El 'path' ${filePath} existe`);

        if(fs.statSync(filePath).isFile()){
            console.log('Es un archivo')

            fs.unlink(filePath,(error)=>{
                if(error){
                    console.error('No se puede borrar este archivo: ',error)
                    return
                }
                console.log('El archivo se ha eliminado exitosamente: ' +filePath)
            })
        } else{
            console.log('Es un directorio')

            let countFiles = fs.readdirSync(filePath)
            console.log(countFiles)

            if(countFiles.length > 0){
                countFiles.forEach((file)=>{
                    console.log(`Archivo a eliminar: ${filePath}/${file}`)
                    directoryDeleted(`${filePath}/${file}`)
                })
            }
            console.log('Eliminamos directorio')
            fs.rmdir(filePath, (error) => {
                if(error){
                    console.error(`Archivo ${filePath} no se pudo eliminar ${error}`)
                }
                console.log(`Archivo ${filePath} eliminado`)
            }) 

        }
    } else{
        console.error(`El archivo ${filePath} no existe`)
        
    }
}

directoryDeleted('nuevoDirectorio')

