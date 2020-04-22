const http = require('http')

//Create a Server
const server = http.createServer((request, response) => {
    response.writeHead(200,{
        'Content-Type':'text/html'
    })
    console.log('METHOD: ', request.method)
    console.log('URL: ', request.url)

    if(request.url ==='/hola'){
        response.write('<h1> HOLA MUNDO DESDE NODE HTTP </h1>')
    }
    if(request.url ==='/adios'){
        response.write('HOLA MUNDO DESDE NODE HTTP')
    }
    response.end()
})

//Call server, 
server.listen(8080)

//Raiser a server --> Run server.js
