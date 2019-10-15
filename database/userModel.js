var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
    host:'127.0.0.1',
    user:'root',
    password:'bitcot',
    database:'vueblog'
});

module.exports = {
    'findById' : function(tableName,Id){      
        return new Promise(function(resolve, reject) {   
            mysqlJson.findByPrimaryKey(tableName, Id, function(err, response) {
                if (!err) {
                    resolve({
                        'status':true,
                        'status_code':200,
                        'result':response
                    });
                }else{
                    resolve({
                        'status':false,
                        'status_code':500,
                        'result':err
                    });
                } 
            }); 
        });
    },
    'customQuery' : function(sqlQuery){      
        return new Promise(function(resolve, reject) {   
            mysqlJson.query(sqlQuery, function(err, response) {
                if (!err) {
                    resolve({
                        'status':true,
                        'status_code':200,
                        'result':response
                    });
                }else{
                    resolve({
                        'status':false,
                        'status_code':500,
                        'result':err
                    });
                } 
            }); 
        });
    },
    'insertData' : function(tableName,jsonPayload){      
        return new Promise(function(resolve, reject) {   
            mysqlJson.insert(tableName, 
                jsonPayload
                , function(err, response) {
                if (!err) {
                    resolve({
                        'status':true,
                        'status_code':200,
                        'result':response
                    });
                }else{
                    resolve({
                        'status':false,
                        'status_code':500,
                        'result':err
                    });
                } 
            }); 
        });
    },
    'updateData' : function(tableName,wherePayload,jsonPayload){      
        return new Promise(function(resolve, reject) {   
            mysqlJson.update(tableName, 
                wherePayload,
                jsonPayload
                , function(err, response) {
                if (!err) {
                    resolve({
                        'status':true,
                        'status_code':200,
                        'result':response
                    });
                }else{
                    resolve({
                        'status':false,
                        'status_code':500,
                        'result':err
                    });
                } 
            }); 
        });
    },
    'deleteData' : function(tableName,wherePayload){      
        return new Promise(function(resolve, reject) {   
            mysqlJson.delete(tableName, 
                wherePayload,
                function(err, response) {
                if (!err) {
                    resolve({
                        'status':true,
                        'status_code':200,
                        'result':response
                    });
                }else{
                    resolve({
                        'status':false,
                        'status_code':500,
                        'result':err
                    });
                } 
            }); 
        });
    }
};


 