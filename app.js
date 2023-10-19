// basic express server deployment on ec2 tutorial:
// https://betterprogramming.pub/deploying-a-basic-express-api-on-amazon-ec2-eea0b54a825
// PM docs: https://www.npmjs.com/package/pm2
// Server IP: http://54.86.94.159/

// Look into this for setting up https
// https://stackoverflow.com/questions/11744975/enabling-https-on-express-js

const express = require('express')
const https = require('https')
const fs = require('fs')
const app = express()
const port = 3000

const key = fs.readFileSync(`selfsigned.key`)
const cert = fs.readFileSync(`selfsigned.crt`)
const options = {
    key,
    cert
}

app.get('/', (req, res) => {
    console.log('req received, query params: ', req.query)
    res.send('Hello World!s')
})

// https.createServer(options, app).listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})