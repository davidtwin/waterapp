/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Customer = require("../models/Customer");

//const Customer = require("../models/Customer");

//const Customer = require("../models/Customer");


module.exports = {
  

  /**
   * `CustomerController.create()`
   */
  create: async function (req, res) {
    try {
      const accountNumber = req.body.accountNumber
    const accountName = req.body.accountName
    const fullName = req.body.fullName
    const emailAddress = req.body.emailAddress
    const telephone = req.body.telephone
    const address1 = req.body.address1
    const address2 = req.body.address2
    const town = req.body.town
    const county = req.body.county
    const postCode = req.body.postCode

      const newCust = await Customer.create({
        accountNumber: accountNumber,
        accountName: accountName, 
        fullName: fullName,
        emailAddress: emailAddress,
        telephone: telephone,
        address1: address1,
        address2: address2,
        town: town,
        county: county,
        postCode: postCode
      })
      return res.send(newCust)
    }catch (err) {
      return res.serverError(err)
    }
    
     
  },

  /**
   * `CustomerController.find()`
   */
  find: async function (req, res) {
    const allCustomers = await Customer.find({

    })
    if (req.wantsJSON) {
      return res.send(allCustomers)
  }

  res.view('pages/customer/home', {
      allCustomers,
      layout: 'layouts/nav-layout'
  })
  },

  /**
   * `CustomerController.delete()`  
   */
  delete: async function (req, res) {
    const deletedCust = await Customer.destroy({id: req.params.id})
    return res.send(deletedCust)
  },

  findOne: async function (req, res) {
    const id = req.params.id
    const cust = await Customer.find({id: id})
    return res.send(cust)
  },
  update: async function (req, res) {

    const cust = await Customer.update({
      id: req.params.id})
      .set({name: req.body.name,
        emailAddress: req.body.emailAddress}).fetch()
      
    
    return res.send(cust)
  },


};

