const mongoose = require('mongoose')
const Product = require('../models/Product')


const products = [
  {
   title: 'Iphone 6 de 128 gb',
   description: 'Entrego telefono con todos los accesorios, menos los audifonos. El telefono esta en buenas condicones con pocos meses de uso, el precio se puede negociar, nos podemos poner de acuerdo para la entrega en algun metro',
   price: '$7,500',
   image: 'https://techcrunch.com/wp-content/uploads/2014/09/iphone-6-front-hand.jpg?w=730&crop=1 ',
   category: 'Iphone',
   address: {
    pais: 'Mexico',
    estado: 'CDMX',
    alcaldia: 'Benito juarez '}
  },
  {
    title: 'Iphone 7 de 128 gb',
   description: 'Entrego telefono con todos los accesorios, menos los audifonos. El telefono esta en buenas condicones con pocos meses de uso, el precio se puede negociar, nos podemos poner de acuerdo para la entrega en algun metro',
   price: '$7,500',
   image: 'https://techcrunch.com/wp-content/uploads/2014/09/iphone-6-front-hand.jpg?w=730&crop=1 ',
   category: 'Iphone',
   address: {
    pais: 'Mexico',
    estado: 'CDMX',
    alcaldia: 'Benito juarez '}
  },
  {
    title: 'Iphone 8 de 128 gb',
   description: 'Entrego telefono con todos los accesorios, menos los audifonos. El telefono esta en buenas condicones con pocos meses de uso, el precio se puede negociar, nos podemos poner de acuerdo para la entrega en algun metro',
   price: '$7,500',
   image: 'https://techcrunch.com/wp-content/uploads/2014/09/iphone-6-front-hand.jpg?w=730&crop=1 ',
   category: 'Iphone',
   address: {
    pais: 'Mexico',
    estado: 'CDMX',
    alcaldia: 'Benito juarez '}
  },
  {
    title: 'Iphone X de 128 gb',
   description: 'Entrego telefono con todos los accesorios, menos los audifonos. El telefono esta en buenas condicones con pocos meses de uso, el precio se puede negociar, nos podemos poner de acuerdo para la entrega en algun metro',
   price: '$7,500',
   image: 'https://techcrunch.com/wp-content/uploads/2014/09/iphone-6-front-hand.jpg?w=730&crop=1 ',
   category: 'Iphone',
   address: {
    pais: 'Mexico',
    estado: 'CDMX',
    alcaldia: 'Benito juarez '}
  },
]

mongoose
  .connect('http://localhost:3000', { useNewUrlParser: true })
  .then(() => {
    Product.create(products)
      .then(products => {
        console.log(`${products.length} products  created successfully`)
        mongoose.connection.close()
      })
      .catch(err => {
        console.log(err)
        mongoose.connection.close()
      })
  })
  .catch(err => console.log(err))