/**
 * CoolerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `CoolerController.create()`
   */
  create: async function (req, res) {
    const id = req.param('id')
    const serialNumber = req.body.serialNumber
    const make = req.body.make
    const model = req.body.model
    const coolerType = req.body.coolerType
    const imageURL = req.body.imageURL
    const status = req.body.status
    const notes = req.body.notes

    await Cooler.create({
        serialNumber: serialNumber, 
        make: make, 
        model: model,
        coolerType: coolerType,
        imageURL: imageURL,
        status: status,
        notes: notes,
        customers: id
    }).fetch()

    res.redirect('/cooler')
  },

  /**
   * `CoolerController.find()`
   */
  find: async function (req, res) {
    sails.log.warn("Show the delivery creation form now")

    //await Customers.destroy({})

    const allCoolers = await Cooler.find()
        .sort('createdAt DESC')
        // .populate('customers')

    if (req.wantsJSON) {
        return res.send(allCoolers)
    }

    res.view('pages/cooler/home', {
        allCoolers,
        layout: 'layouts/nav-layout'
    })

    
  },

  /**
   * `CoolerController.delete()`
   */
  delete: async function (req, res) {
    const deletedCooler = await Cooler.destroy({id: req.param('id')})
    return res.send(deletedCooler)
  }

};

