const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200,{
        'Content-Type':'text/html'
    })
    console.log('METHOD: ', request.method)
    console.log('URL: ', request.url)

    if(request.url ==='/hola'){
        response.write('<h1> Hola Koder, iniciando clase </h1>')
    }
    if(request.url ==='/adios'){
        response.write('Adios Koder, hasta mañana')
    }
    response.end()
})

server.listen(8082)