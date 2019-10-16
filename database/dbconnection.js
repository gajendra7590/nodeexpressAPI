var MysqlJson = require('mysql-json');
const mysqlJson = new MysqlJson({
    host:'127.0.0.1',
    user:'root',
    password:'bitcot',
    database:'test'
});

module.exports =  mysqlJson;