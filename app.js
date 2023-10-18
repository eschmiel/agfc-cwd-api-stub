// basic express server deployment on ec2 tutorial:
// https://betterprogramming.pub/deploying-a-basic-express-api-on-amazon-ec2-eea0b54a825
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})