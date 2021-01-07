/**
 * CustomerProfileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `CustomerProfileController.find()`
   */
  find: async function (req, res) {
    const custId = req.param('id')
    const customer = await Customer.findOne({
        id: custId
    })
    

    const orders = await Order.find({
        customer: custId
    }).populate('customer')
      .sort('createdAt DESC')
      .populate('products')
      .populate('productsOrdered', {
        where: {
          quantity: {'>=':1}
        }
      })
    
      customer.orders = orders

      const sanitizedCustomer = JSON.parse(JSON.stringify(customer))

      if (req.wantsJSON) {
          return res.send(sanitizedCustomer)
      }
      //send into a page
      res.view('pages/customer/customerprofile', {
          layout: 'layouts/nav-layout',
          customer: sanitizedCustomer
      })
  },

  /**
   * `CustomerProfileController.update()`
   */
  update: async function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  }

};

