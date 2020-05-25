const express = require('express');

const app = express();

app.get('/' , ( req , res , next ) => {
    res.send('<h1>Node Server</h1>');
} );

app.listen( 8080 );