const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart.controller');
const auth = require('../middlewares/auth');

router.get('/cart', auth, CartController.list);
router.post('/cart', auth, CartController.add);
router.delete('/cart/:id', auth, CartController.remove);


module.exports = router;
