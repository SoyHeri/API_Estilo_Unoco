const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

// GET /products
router.get('/', productsController.getProducts);

// GET /products/:id
router.get('/:id', productsController.getProductById);

// POST /products
router.post('/', productsController.createProduct);

// PUT /products/:id
router.put('/:id', productsController.updateProduct);

// DELETE /products/:id
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
