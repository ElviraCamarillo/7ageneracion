const express = require('express')

const app = express()

const fs = require('fs')
const fileToRead = 'archivo1.txt';
const enconding = 'utf8'




app.get('/',(request,response)=>{
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

app.listen(8083,()=>{
    console.log('server running')
})