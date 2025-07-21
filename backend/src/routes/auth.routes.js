const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const AuthController = require('../controllers/auth.controller');

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/profile', auth, AuthController.profile);


module.exports = router;
