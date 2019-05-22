const express = require('express');
const router  = express.Router();
const Product  = require('../models/Product')
const uploadCloud = require('../helpers/cloudinary')
let {isAuth} = require('../helpers/middlewares')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//CRUD

router.get('/products', (req,res,next)=>{
  if(req.query){
    let {category} = req.query
      Product.find({category:category})
      .then(products => res.status(200).json(products))
      .catch(err =>res.status(500).json(err))    
  }else{
    Product.find()
      .then(products => res.status(200).json(products))
      .catch(err =>res.status(500).json(err))
  }
})
  

router.get('/products/:id', (req,res,next)=>{
  console.log(req.params.id)
  Product.findById(req.params.id)
  .then(products => res.status(200).json(products))
  .catch(err => res.status(500).json(err))
})

router.post('/products', (req, res, next) =>{
  Product.create({...req.body})
  .then(products => res.status(200).json(products))
  .catch(err => res.status(500).json(err))
})

router.patch('/products/:id', (req,res,next) =>{
  Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(products => res.status(200).json(products))
  .catch(err => res.status(500).json(err))
})

router.delete('/products/:id', (req,res,next)=>{
  const { password } = req.headers
  
  Product.findByIdAndDelete(req.params.id)
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json(err))
})

module.exports = router;

