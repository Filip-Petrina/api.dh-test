
const express = require('express')
const app = express()
const port = 3001

const login = require('./login')
const encode = require('./encode')

app.use(express.json())

// Add headers
app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,authorization');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    next();
});

app.post('/login', login)
app.post('/encode', encode)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app