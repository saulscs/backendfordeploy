const mongoose = require('mongoose')
const { Schema } = mongoose 


const productSchema = new Schema (
{
 title: String,
 description: String,
 price: String,
 image: String,

 category: {
   type: String,
   enum:["Mac", "Iphone","Ipad","Apple Watch","Accesorios","Otros"]
  },

  address:{
  pais: String,
  estado: String,
  ciudad: String,
  alcaldia: String,
  colonia: String,
  direccion: String,
  location: { coords: [String], lat: String, lng: String }
  },
},
{ 
  timestamps: true, 
  versionKey: false 
}
)



module.exports = mongoose.model('Product', productSchema)