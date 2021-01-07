/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
   // custom JSON function
  //  customToJSON: function() {
  //   return {id: this.id, 
  //     orderNo: this.orderNo, 
  //     customer: this.customer,
  //     products: this.products,
  //     productsOrdered: this.productsOrdered,
  //     createdAt: this.createdAt
      
  //   }
  // },

  attributes: {

    orderNo: {
      type: 'string',
      required: true
    },
    notes: {
      type: "string"
    },
    completed: {
      type: "boolean", defaultsTo: false
    },
    dateDue: {
      type: "string"
    },
    dateOrdered: {
      type: "string"
    },
    dateCompleted: {
      type: "string"
    },
    customer: {
      model: 'Customer',
      required: true
    },
    products: {
      collection: 'product',
      via: 'order',
      through: 'sale'
    },
    productsOrdered: {
      collection: 'sale'
    }
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

