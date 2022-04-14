var express = require('express');
const tesla_controllers = require('../controllers/teslas')
var router = express.Router();

/* GET home page. */
router.get('/', tesla_controllers.tesla_view_all_Page);
module.exports = router;
