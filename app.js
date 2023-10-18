// basic express server deployment on ec2 tutorial:
// https://betterprogramming.pub/deploying-a-basic-express-api-on-amazon-ec2-eea0b54a825
// PM docs: https://www.npmjs.com/package/pm2
// Server IP: http://54.86.94.159/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('req received, query params: ', req.query)
    res.send('Hello World!s')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})