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

exports.tesla_create_post = function(req,res) {
    res.send('NOT IMPLEMENTED: Tesla create POST');
}

exports.tesla_delete = function(req,res) {
    res.send('NOT IMPLEMENTED: Tesla delete DELETE ' + req.params.id);
}

exports.tesla_update_put = function(req,res) {
    res.send('NOT IMPLEMENTED: Tesla update PUT' + req.params.id);
}
