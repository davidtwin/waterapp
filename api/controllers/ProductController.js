/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `ProductController.create()`
   */
  create: async function (req, res) {
    await Product.create({
      name: req.body.name,
      price: req.body.price
    })
    return res.send('Created')
  },

  /**
   * `ProductController.find()`
   */
  find: async function (req, res) {
    const allProducts = await Product.find({})
    if (req.wantsJSON) {
      return res.send(allProducts)
  }

  res.view('pages/product/home', {
      allProducts,
      layout: 'layouts/nav-layout'
  })
  }

};

