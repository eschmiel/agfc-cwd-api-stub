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

// We were previously using this cors middleware to handle the CORS process
// but I disabled it so I could create and share a more direct solution to our
// issue. - EGS 8/2/24
// app.use(cors())
app.use(function (request, response, next) {
    response.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, priority',
        'Access-Control-Allow-Credentials': 'true'
    })
    next()
})

// This was the endpoint we had setup to simulate the AGFC restAPI.
// The actual endpoint url we hit is different.
app.get('/search-hunters', (req, res) => {
    console.log('req received, query params: ', req.query)
    handler(req).then((response) => {
        res.status(500).send(response)
    })
})







app.get('/', (req, res) => {
    console.log('/ path activated ', req.query)
    res.send('/ path activated')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})