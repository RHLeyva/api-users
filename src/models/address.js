// const Joi = require('joi');
// const {Schema, model, mongoose } = require('mongoose');


// const AddressSchema = new mongoose.Schema({
//     id: {
//         type: Number,
//         required: [true, 'Id is required']
//     },
//     street: {
//         type: String,
//         required: [true, 'Street name is required']
//     },
//     state: {
//         type: String,
//         required: [true, 'State name is required'],
//     },
//     city: {
//         type: String,
//         required: [true, 'The name of the city is required']
//     },
    
//     country: {
//         type: String,
//         required: [true, 'Country name is required']
//     },
//     zip: {
//         type: String,
//         required: [true, 'Zip code is required']
//     }
    
// });

// AddressSchema.methods.toJSON = function() {
//     const {__v,  ...address}= this.toObject();
//     return address;
// }
// const Address = mongoose.model('Address', AddressSchema)
// module.exports = model( 'Address', AddressSchema);

// function validateAddress(address) {
//     const schema = {
//       name: Joi.string().min(3).required()
//     };
  
//     return Joi.validate(address, schema);
// }
  
 

// exports.AddressSchema = AddressSchema;
// exports.Address = Address; 