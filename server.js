const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'birthName' : 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' :  'London, United Kingdom',
        'age' : 29
    },
    'chance the rapper': {
        'birthName' : 'Chancelor Johnathan Bennett',
        'birthLocation' :  'Chicago, United States',
        'age' : 29
    },
    'unknown': {
        'birthName' : 'unknown',
        'birthLocation' :  'unknown',
        'age' : 'unknown'
    }
    
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
 
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better Go Catch It!!!`)
})