const express = require('express')

const app = express()

const fs = require('fs')
const fileToRead = 'archivo1.txt';
const enconding = 'utf8'

//app.[get, post, delete, put, patch,](ruta, rquestHandler)

// GET /
app.get('/',(request,response)=>{
    response.write('Hola Mundo!!')
    response.end()
})

// endpoint es la combinación de una ruta y de un método.
app.get('/hola',(request,response)=>{
    response.json({
        message:'Hola en json'
    })
})

//'application/json' --> MIME type
app.get('/adios',(request,response) => {
    response.writeHead(200,{
        'Content-Type':'application/json'
    })
    const responseObject ={
        message: 'Adios Koders :('
    }
    response.write(JSON.stringify(responseObject))
    response.end()

})

app.get('/read',(request,response)=>{
    fs.readFile(fileToRead, enconding, (error,data)=>{
        if(error){
            response.json({
                message:'error'
            })
        }
        response.json({
            content: data

        })
    })
})


app.post('/',(request, response) => {
    response.json({
        message:'POST a root'
    })
})

app.delete('/',(request,response) => {
    response.status(400)
    response.json({
        message:'DELETE a root'
    })
})


app.listen(8081,()=>{
    console.log('server running')
})