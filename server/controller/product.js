const products = require('../data/data');

exports.getProducts = ( req, res, next ) => {
    // console.log(products.productInfo[ 0 ]);
    res.status(200).json(
        products.productInfo
    )
}

exports.fetchProduct = ( req , res , next ) => {
    const productId = req.body.id;
    const Arr = products.productInfo;
    for( let i = 0; i < Arr.length; i++ )
    {
        if( Arr[ i ].id === productId )
        {
            res.status( 200 ).json( Arr[ i ]);
        }
    }
}