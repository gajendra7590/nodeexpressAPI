var express = require('express');
var router = express.Router(); 
var userModel = require('../database/userModel');

 console.log('dsdsdd')

//List all data
router.get('/listUsers',async function(req,res){
    var resData = await userModel.findByPrimaryKey('blogs','1');
    if(resData){
        res.json(resData);
    }   
});

//Save Data
router.post('/saveUsers',function(req,res){
    var reqData = req.body;
    var insertData = {};
    var resData = await userModel.insertData('blogs',insertData); 
    if(resData){
        res.json(resData);
    }   
});

//get Single data
router.get('/editUsers/:id',function(req,res){
    var reqData = req.body;
    var insertData = {};
    var resData = await userModel.insertData('blogs',insertData); 
    if(resData){
        res.json(resData);
    }  
});

router.put('/updateUsers/:id',function(req,res){
    var reqData = req.body;
    var insertData = {};
    var resData = await userModel.insertData('blogs',insertData); 
    if(resData){
        res.json(resData);
    }  

});

router.delete('/deleteUsers/:id',function(req,res){
    var reqData = req.body;
    var insertData = {};
    var resData = await userModel.insertData('blogs',insertData); 
    if(resData){
        res.json(resData);
    }  
});  

module.exports = router;

 
