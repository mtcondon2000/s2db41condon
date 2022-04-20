var express = require('express');
const tesla_controller = require('../controllers/teslas')
var router = express.Router();

/* GET home page. */
router.get('/', tesla_controller.tesla_view_all_Page);

router.get('/teslas', tesla_controller.tesla_list); 

router.get('/detail/?id', tesla_controller.tesla_view_one_Page);
 
router.get('/create', tesla_controller.tesla_create_Page); 

router.get('/update/?id', tesla_controller.tesla_update_Page); 

router.get('/delete/?id', tesla_controller.tesla_delete_Page); 

module.exports = router;
