const fs =require('fs')

const deleteFile = 'write3.txt'

fs.unlink(deleteFile,(error)=>{
    if(error){
        console.error(`No se puede eliminar ${deleteFile}`,error)
        return
    }
    console.log(`${deleteFile} ha sido eliminado`)
})
