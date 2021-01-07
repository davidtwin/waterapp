/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Order = require("../models/Order");
var nestedPop = require('nested-pop');
module.exports = {
  

  /**
   * `OrderController.create()`
   */
  create: async function (req, res) {
    const orderId = req.param('id')
    const quantity1 = req.param('quantity1')
    const product1 = req.param('product1')

    const productTwo = await Sale.create({
    quantity: quantity1,
    product: product1,
    order: '5ff6de9a06a4c75162928e61'
  }).fetch()

  const newSale = await Order.addToCollection('5ff6de9a06a4c75162928e61', 'productsOrdered',[productTwo.id])
  // const newSale = await Order.addToCollection(order.id, 'productsOrdered', ['5fc4de78a0cd9d3b3575e98d'])

  return res.send(newSale)
    // const newOrder = await Order.create({
    //   orderNo: req.body.orderNo,
    //   customer: req.body.custId,
      
    // }).fetch()

    // return res.send(newOrder)
  },

  /**
   * `OrderController.find()`
   */
  

  find: async function (req, res) {
    
    const allOrders = await Order.find({})
    //.populate('products')
    .sort('createdAt DESC')
    .populate('customer')
    .populate('products')
    .populate('productsOrdered')
    // .populate('productsOrdered', {
    //   where: {
    //     quantity: {'>=':1}
    //   }
    // })
    
    const sanitizedOrder = JSON.parse(JSON.stringify(allOrders))
    //return res.send(allOrders)
    if (req.wantsJSON) {
      return res.send(sanitizedOrder)
  }
    res.view('pages/order/home', {
      allOrders: sanitizedOrder,
      layout: 'layouts/nav-layout'

    })
  },

  /**
   * `OrderController.delete()`
   */
  delete: async function (req, res) {
    const deletedOrder = await Order.destroy({id: req.param('id')})
    return res.send(deletedOrder)
  },

  /**
   * `OrderController.update()`
   */
  update: async function (req, res) {
    const orderId = req.param('id')
   
    const quantity = req.param('quantity')
    const product = req.param('product')
    const quantity1 = req.param('quantity1')
    const product1 = req.param('product1')
   
    
    

    const productOne = await Sale.create({
      quantity: quantity,
      product: product,
      collected: req.param('collected'),
      order: orderId
    }).fetch()
  
    const productTwo = await Sale.create({
      quantity: quantity1,
      product: product1,
      collected: req.param('collected1'),
      order: orderId
    }).fetch()
    
    await Order.replaceCollection(orderId, 'productsOrdered',[productOne.id, productTwo.id])
    // await Order.addToCollection(orderId, 'productsOrdered',[productOne.id, productTwo.id])
    //return res.send(newSale)
    res.redirect('/order')
  },
  findOne: async function (req, res) {
    const orderId = req.param('id')
    const order = await Order.findOne({id: orderId})
    .populate('customer')
    .populate('products')
    .populate('productsOrdered')
    // .populate('productsOrdered', {
    //   where: {
    //     quantity: {'>=':1}
    //   }
    // })
    
    // return res.send(order)
    if (req.wantsJSON) {
      return res.send(order)
  }
  //send into a page
  res.view('pages/order/deliveryorder', {
      layout: 'layouts/nav-layout',
      order
  })
  },

};

