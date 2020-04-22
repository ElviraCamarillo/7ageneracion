const fs =require('fs')

const newDir='Carpeta1'

fs.mkdir(newDir,(error)=>{
    if(error){
        console.error(`No puedo crear tu carpeta ${newDir}`)
        return  
    }
    console.log(`Se ha creado tu carpeta: ${newDir}`)

})