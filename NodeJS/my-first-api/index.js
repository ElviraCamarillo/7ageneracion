const fs = require('fs')
const express = require('express')

const kodemia =JSON.parse(fs.readFileSync('kodemia.json'))

const server = express()
server.use(express.json()) //Middleware

//endpoints: la combinación de un método y una ruta
// método: Métoos HTTP, GET, POST, DELETE, PUT, PATCH
// ruta: strings que denotan recursos en nuestro servidor.

server.get('/', (request,response)=>{
    response.json({
        message: 'My first API is running'
    })
})

//Section koders 
server.get('/koders',(request,response) => {
    response.json({
        message:'All the koders',
        data:{
            koders:kodemia.koders
        }
})
})

server.post('/koders',(request,response) => {
    const newKoder = {
        name:request.body.name,
        generation:request.body.generation
    }
    kodemia.koders.push(newKoder)
    response.json({
        message:'new koder added',
        data:{
            koder:newKoder
        }
    })
})

//Sectio a-Mentors
server.get('/amentors',(request,response)  => {
    response.json({
        message:'All the aMentors',
        data:{
            aMentors:kodemia.aMentors
        }
    })
})

server.post('/amentors',(request,response)  => {
    const newMentor = {
        name:request.body.name,
        course:request.body.course,
        generation:request.body.generation
    }
    kodemia.aMentors.push(newMentor)
    response.json({
        message:'new aMentor added',
        data:{
            aMentor:newMentor
        }
    })

})

server.listen(8081,()=>{
    console.log('Server is running')
})

//200.1.2.10
///Users/gabrielaelviracamarilloluna/Documents/kodemia/septima-gen/my-firts-api
