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
exports.tesla_detail = async function(req, res) { 
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
exports.tesla_create_post = async function(req, res) { 
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
exports.tesla_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await Tesla.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.tesla_type)  
                   toUpdate.tesla_type = req.body.tesla_type; 
            if(req.body.cost) toUpdate.year = req.body.year; 
            if(req.body.size) toUpdate.cost = req.body.cost; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
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