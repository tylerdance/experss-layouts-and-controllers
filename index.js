// import

// create routes

// app.listen

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('yeö')
})


app.listen(8000, () => {
    console.log('server live');
})