const orders = require('../data/data');

exports.placeOrder = ( req , res , next ) => {
    const products = req.body.products;
    const totalAmount = req.body.totalAmount;

    console.log("Product = " ,  products );
    console.log("Amount = " , totalAmount );

    orders.orderList.push({
        products: products,
        totalAmount: totalAmount
    })
    console.log( orders.orderList );
    res.status( 201 ).json( {
        massage: "Order Placed Succesfully"
    } ); 
}