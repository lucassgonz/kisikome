const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart.controller');
const auth = require('../middlewares/auth');

router.get('/', auth, CartController.list);
router.post('/', auth, CartController.add);
router.delete('/:id', auth, CartController.remove);


module.exports = router;
