const express = require('express');

const authmiddlewares = require('../middlewares/authmiddlewares');
const router = require('./test.router');
const { ordercreateController, orderstatusController } = require('../controller/ordercontroller');
const adminmiddlewares = require('../middlewares/adminmiddlewares');

// PLACE ORDER
router.post('/order', authmiddlewares, ordercreateController)

// ORDER STATUS
router.put('/orderstatus/:id', authmiddlewares , adminmiddlewares, orderstatusController)

module.exports = router;


