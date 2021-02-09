const express = require('express')
const app = express()
const db = require('./queries')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.get('/api/v1/articles', db.getArticles)
app.put('/api/v1/articles/:id', db.updateArticles)

app.listen(3000,() => console.log("Server nyala"))