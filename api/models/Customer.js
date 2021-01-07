module.exports = {

    attributes:{
        
        accountNumber: {
            
            type: 'string',  
            required: true,
            unique: true,

        },
        accountName: {
            type: "String",
            required: true
        },
        fullName: {
            type: "String",
            required: true
        },
        emailAddress: {
            type: "String",
            required: true
        },
        telephone: {
            type: "String",
            required: true
        },
        address1: {
            type: "String",
            //required: true
        },
        address2: {
            type: "String",
            //required: true
        },
        town: {
            type: "String",
            //required: true
        },
        county: {
            type: "String",
            //required: true
        },
        postCode: {
            type: "String",
            required: true
        },
        orders: {
            collection: 'Order',
            via: 'customer'
        }
        
    }
}