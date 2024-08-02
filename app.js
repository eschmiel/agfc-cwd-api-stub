// basic express server deployment on ec2 tutorial:
// https://betterprogramming.pub/deploying-a-basic-express-api-on-amazon-ec2-eea0b54a825
// PM docs: https://www.npmjs.com/package/pm2
// Server IP: http://54.86.94.159/
// Command to access locally is: ssh -i agfc-cwd-api-stub-key.pem ubuntu@54.86.94.159
// Run from the users/eric.schmiel/downloads folder 

// Using API Gateway allowed us to get a proper ssl cert and domain in place for https
// https://codethief.io/aws-connect-api-gateway-to-ec2/

const express = require('express')
const cors = require('cors')
const { handler } = require('./src/stubLogic')
const app = express()
const port = 3000

// app.use(cors())
app.use(function (req, res, next) {

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization'
    })
    next()
})
app.get('/', (req, res) => {
    console.log('/ path activated ', req.query)
    res.send('/ path activated')
})

app.get('/search-hunters', (req, res) => {
    console.log('req received, query params: ', req.query)
    handler(req).then((response) => {
        res.send(response)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})