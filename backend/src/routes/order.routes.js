const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');
const auth = require('../middlewares/auth');

router.post('/', OrderController.create);
router.get('/', auth, OrderController.listByClient);
router.get('/:id', auth, OrderController.details);

module.exports = router;
