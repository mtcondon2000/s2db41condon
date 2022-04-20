var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var tesla_controller = require('../controllers/teslas'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/teslas', tesla_controller.tesla_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/teslas/:id', tesla_controller.tesla_delete); 
 
// PUT request to update Costume. 
router.put('/teslas/:id', tesla_controller.tesla_update_put); 
 
// GET request for one Costume. 
router.get('/teslas/:id', tesla_controller.tesla_detail); 
 
// GET request for list of all Costume items. 
router.get('/teslas', tesla_controller.tesla_list); 

router.get('/detail', tesla_controller.tesla_view_one_Page);
 
router.get('/create', tesla_controller.tesla_create_Page); 

router.get('/update', tesla_controllers.tesla_update_Page); 

router.get('/delete', tesla_controllers.tesla_delete_Page); 

module.exports = router; 