const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const auth = require('../middlewares/auth');

router.get('/', ProductController.list);

module.exports = router;
