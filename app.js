const express = require('express')
const app = express()

app.use(express.static('www'))

const server = app.listen(3333, () => {
    console.log(server.address())
})