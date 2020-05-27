const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');

app.use( bodyParser.json() );

app.use( (req , res , next ) => {
    res.setHeader('Access-Control-Allow-Origin' , '*');
    res.setHeader('Access-Control-Allow-Method' , '*');
    res.setHeader('Access-Control-Allow-Headers' , 'Content-Type');
    next();
})

app.post( '/place-order' , orderRoutes )

app.use( '/' , productRoutes )

app.listen( 8080 );