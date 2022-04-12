var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var tesla_controller = require('../controllers/controller'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/tesla', tesla_controller.tesla_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/tesla/:id', tesla_controller.tesla_delete); 
 
// PUT request to update Costume. 
router.put('/resource/tesla/:id', 
tesla_controller.tesla_update_put); 
 
// GET request for one Costume. 
router.get('/resource/tesla/:id', tesla_controller.tesla_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/tesla', tesla_controller.tesla_list); 
 
module.exports = router; 