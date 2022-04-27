var express = require('express');
const tesla_controller = require('../controllers/teslas')
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    console.log('Session is' + req.session);
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
    
  } 

/* GET home page. */
router.get('/', tesla_controller.tesla_view_all_Page);

router.get('/teslas', tesla_controller.tesla_list); 

router.get('/detail', tesla_controller.tesla_view_one_Page);
 
router.get('/create', tesla_controller.tesla_create_Page); 

router.get('/update', secured, tesla_controller.tesla_update_Page); 

router.get('/delete', tesla_controller.tesla_delete_Page); 

module.exports = router;
