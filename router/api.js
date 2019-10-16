var express = require('express');
var router = express.Router(); 
var Base64 = require('js-base64').Base64;
var moment = require('moment'); 
var userModel = require('../database/commonModel'); 
var upload = require('../fileUpload'); 

//function for get single data with unique id
router.get('/getUser/:id',async function(req,res){ 
    var resData = await userModel.findById('users',req.params.id);
    if(resData){
        res.json(resData);
    }   
});

//function for get all data list
router.get('/listUsers',async function(req,res){
    const Query = "SELECT id,name,email,created_at FROM users ORDER BY id DESC";
    var resData = await userModel.customQuery(Query);
    if(resData){
        res.json(resData);
    }   
});

//function for save/insert data
router.post('/saveUsers',upload.single('avatar'),async function(req,res){   
    var insertData = req.body;  
    inserObj = {
        name : insertData.name,
        email : insertData.email,
        password : insertData.password,
        phone : insertData.phone,
    }; 
    if(inserObj.password){
        inserObj.password = Base64.encode(inserObj.password); 
        inserObj.created_at = moment().format('YYYY-MM-DD hh:mm:s');
    }  
    if(req.file.filename){
        inserObj.profile_image = req.file.filename;
    } 

    var resData = await userModel.insertData('users',inserObj); 
    if(resData){
        res.json(resData);
    }   
});

//function for get edit data
router.get('/editUsers/:id',async function(req,res){
    const Query = "SELECT id,name,email,created_at FROM users WHERE id='"+req.params.id+"' ORDER BY id DESC";  
    var resData = await userModel.customQuery(Query); 
    if(resData){
        res.json(resData);
    }  
});

// function for update data
router.put('/updateUsers/:id',upload.single('avatar'),async function(req,res){  
    var resData = await userModel.findById('users',req.params.id);  
    var data = resData.data;
    if(data.id){
         var wherePayLoad = {
               id : { operator:'=', value : req.params.id }
         }; 
         var updatePayLoad = req.body;
         updatePayLoad = {
            name : updatePayLoad.name,
            email : updatePayLoad.email,
            phone : updatePayLoad.phone,
         }; 

         if(req.file.filename){
            updatePayLoad.profile_image = req.file.filename;
         }  

         var resData = await userModel.updateData('users',updatePayLoad,wherePayLoad); 
         if(resData){
            res.json(resData);
         }   

    }else{
        res.json({
            status:false,
            message:"No user exist with id : "+req.params.id
        }) 
    } 
});

//function for delete data
router.delete('/deleteUsers/:id',async function(req,res){
    var resData = await userModel.findById('users',req.params.id);  
    var data = resData.data;
    if(data.id){
         var wherePayLoad = {
               id : { operator:'=', value : req.params.id }
         }; 
         var updatePayLoad = req.body;
         var resData = await userModel.deleteData('users',wherePayLoad); 
         if(resData){
            res.json(resData);
         }   

    }else{
        res.json({
            status:false,
            message:"No user exist with id : "+req.params.id
        }) 
    }
});  

module.exports = router;

 
