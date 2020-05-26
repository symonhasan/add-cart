const products = require('../data/data');

exports.getProducts = ( req, res, next ) => {
    // console.log(products.productInfo[ 0 ]);
    res.status(200).json(
        products.productInfo
    )
}