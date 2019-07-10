const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const addAppRoutes = require('./routes/app-route')

const app = express()
var server = require('http').Server(app);
app.use(express.static('public'))
app.use(cors({
  origin: ['http://localhost:4200'],
  credentials: true // enable set cookie
}));
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('you are connected')
})

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Example app listening on port ${port}`))


addAppRoutes(app)