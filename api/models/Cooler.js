module.exports = {

    attributes: {
        serialNumber: {
            type: "String"
        },
        make: {
            type: "String"
        },
        model: {
            type: "String"
        },
        coolerType: {
            type: "String"
        },
        imageURL: {
            type: "String"
        },
        status: {
            type: "String"
        },
        notes: {
            type: "String"
        },
        customer: {
            
            model: 'customer',
            // required: true
        },
    }
}