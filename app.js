const express = require('express')

const app = express()

const port = 2323

app.use(express.static('views'))


app.get('/',(req, res) => {
    res.sendFile(__dirname+'/views/login.html')
})

app.get('*',(req, res) => {
    res.write('Error')
    res.end()
})

app.listen(port, () =>
console.log(`Escuchando por el puerto ${port}`)
)