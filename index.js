const express = require('express'),
    app = express(),
    routes = require('./routes')
  
require('./migration')

app.use(express.json());
app.use(routes)

app.listen(9000, () => {
    console.log('oleet API')
})