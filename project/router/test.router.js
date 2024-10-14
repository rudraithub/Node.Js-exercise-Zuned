const e = require('cors');
const express = require ('express');
const { testUsercontroller } = require('../controller/test.controller');

// Router Object
const router = express.Router();


// routes GET / POST / UPDATE / DELETE
router.get('/test-user',testUsercontroller)

// export
module.exports = router



// LuETnOzuGuFel8Pz
// mongodb+srv://zunedkhanhoth:<db_password>@cluster0.qjemd.mongodb.net/
