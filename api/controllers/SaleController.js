/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  

  /**
   * `CartController.create()`
   */

  create: async function (req, res) {

    const quantity = req.param('quantity')
    const product = req.param('product')
    const quantity1 = req.param('quantity1')
    const product1 = req.param('product1')
    

    const order = await Order.create({
      orderNo: req.body.orderNo,
      customer: req.body.custId
    }).fetch()

  //   await Order.findOne({
  //   orderNo: req.body.orderNo
  // })
    

  // const productTwo = await Sale.findOrCreate({ product: product1 }, { quantity: quantity1,
  //       product: product1,
  //       order: order.id
  //     })
  
  
// const order = await Order.findOrCreate({orderNo: req.body.orderNo}, {orderNo: req.body.orderNo,
//   customer: req.body.custId})

  // const productOne = await Sale.findOrCreate({ product: product }, { quantity: quantity,
  //       product: product,
  //       order: order.id
  //     })
  // const productTwo = await Sale.findOrCreate({ product: product1 }, { quantity: quantity1,
  //       product: product1,
  //       order: order.id
  //     })

  // await Order.find({
  //   order: order.id
  // })
  // var productOne = await Sale.find({
  //   product: product
  // })
  
  // if (!productOne) {
  //   sails.log('Could not find Finn, sorry.');
  //   Sale.create({
  //     quantity: quantity,
  //     product: product,
  //     order: order.id
  //   }).fetch()
  // }
  // else {
  //   sails.log('Already Created');
  //   Sale.create({
  //     quantity: quantity,
  //     product: product,
  //     order: order.id
  //   }).fetch()
  // }
  
  // var productTwo = await Order.find({
  //   product: product1
  // });
  
  // if (!productTwo) {
  //   sails.log('Could not find Finn, sorry.');
  //   Sale.create({
  //     quantity: quantity,
  //     product: product,
  //     order: order.id
  //   }).fetch()
  // }
  // else {
  //   sails.log('Already Created');
    
  // }
  
  


  const productOne = await Sale.create({
    quantity: quantity,
    product: product,
    order: order.id
  }).fetch()

  // const productTwo = await Sale.create({
  //   quantity: quantity1,
  //   product: product1,
  //   order: order.id
  // }).fetch()
  


  // const sale = await Sale.createEach([{
  //   quantity: quantity,
  //   product: product,
  //   order: order.id
    
  // }]).fetch()

  const newSale = await Order.addToCollection(order.id, 'productsOrdered',[productOne.id])
  // const newSale = await Order.addToCollection(order.id, 'productsOrdered', ['5fc4de78a0cd9d3b3575e98d'])

  return res.send(newSale)
  // return res.ok()
  },

  
  /**
   * `CartController.find()`
   */
  find: async function (req, res) {
    const allSales = await Sale.find({})
    .populate('product')
    .populate('order')
    .sort('createdAt DESC')
   // .populate('products')
    return res.send(allSales)
  },

  /**
   * `CartController.delete()`
   */
  delete: async function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  },
  update: async function (req, res) {
    const orderId = req.param('id')
   
    const quantity = req.param('quantity')
    const product = req.param('product')
    const quantity1 = req.param('quantity1')
    const product1 = req.param('product1')
   

    const productOne = await Sale.create({
      quantity: quantity,
      product: product,
      order: orderId
    }).fetch()
  
    const productTwo = await Sale.create({
      quantity: quantity1,
      product: product1,
      order: orderId
    }).fetch()
    
    const newSale = await Order.replaceCollection(orderId, 'productsOrdered',[productOne.id, productTwo.id])
    return res.send(newSale)
  }

};

