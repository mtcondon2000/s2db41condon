var Tesla = require('../models/teslaSchema');

exports.tesla_list = async function(req,res) {
    try {
        theTeslas = await Tesla.find();
        res.send(theTeslas);
    }
    catch(err){
        res.status(500);
        res.send('{"error":${err}}');
    }
}

exports.tesla_detail = function(req,res) {
    res.send('NOT IMPLEMENTED: Tesla detail: '+ req.params.id);
}

exports.tesla_create_post = async function(req,res) {
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
}

exports.tesla_delete = function(req,res) {
    res.send('NOT IMPLEMENTED: Tesla delete DELETE ' + req.params.id);
}

exports.tesla_update_put = function(req,res) {
    res.send('NOT IMPLEMENTED: Tesla update PUT' + req.params.id);
}

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
