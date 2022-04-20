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
    document.year = req.body.year; 
    document.cost = req.body.cost; 
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
exports.tesla_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Tesla.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } }; 
 
// Handle Costume update form on PUT. 
exports.tesla_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await Tesla.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.tesla_type)  
                   toUpdate.tesla_type = req.body.tesla_type; 
            if(req.body.year) toUpdate.year = req.body.year; 
            if(req.body.cost) toUpdate.cost = req.body.cost; 
            let result = await toUpdate.save(); 
            console.log("Success " + result) 
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

exports.tesla_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Tesla.findById( req.query.id) 
        res.render('tesladetail',  
{ title: 'Tesla Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.tesla_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('teslacreate', { title: 'Tesla Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.tesla_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Tesla.findById(req.query.id) 
        res.render('teslaupdate', { title: 'Tesla Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.tesla_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Tesla.findById(req.query.id) 
        res.render('tesladelete', { title: 'Tesla Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 