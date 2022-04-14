var Tesla = require('../models/tesla'); 
 
// List of all Costumes 
exports.tesla_list = async function(req, res) { 
    try{ 
        theTesla = await Tesla.find(); 
        res.send(theTesla); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   }; 
 
// for a specific Costume. 
exports.tesla_detail = function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Tesla.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Costume create on POST. 
exports.tesla_create_post = function(req, res) { 
    console.log(req.body) 
    let document = new Tesla();
    document.tesla_type = req.body.tesla_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 

// Handle Costume delete form on DELETE. 
exports.tesla_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.tesla_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id); 
}; 

exports.tesla_view_all_Page = async function(req, res) { 
    try{ 
        theTeslas = await Tesla.find(); 
        res.render('teslas', { title: 'Tesla Search Results', results: theTeslas }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 