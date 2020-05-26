const express = require('express');

const app = express();
const productRoutes = require('./routes/product');

app.use( '/' , productRoutes )

app.listen( 8080 );