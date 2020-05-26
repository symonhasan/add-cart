const express = require('express');

const app = express();
const productRoutes = require('./routes/product');

app.use( (req , res , next ) => {
    res.setHeader('Access-Control-Allow-Origin' , '*');
    res.setHeader('Access-Control-Allow-Method' , '*');
    res.setHeader('Access-Control-Allow-Headers' , 'Content-Type');
    next();
})

app.use( '/' , productRoutes )

app.listen( 8080 );