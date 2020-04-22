const fs =require('fs')

const deleteDir = 'Carpeta1'

fs.rmdir(deleteDir,(error)=>{
    if(error){
        console.error(`No se puede eliminar la carpeta ${deleteDir}`,error)
        return
    }
    console.log(`Se ha borrado exitosamente la carpeta ${deleteDir}`)

})