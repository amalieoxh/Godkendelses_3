const express = require('express')
// init express
const app = express()

var cors = require('cors')
app.use(cors())

// tilføjer funktion, som returnerer antallet af gange, som du har spurgt det endpoint
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
})();

// Create your endpoints/route handlers
app.get('/', (req, res) => {
    res.send('Hello World!' + " " + add())
  })

// listen on a port 
const port = 7000;

app.listen(port, () => console.log("Server started on port " + port)) 


