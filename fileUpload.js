var multer  = require('multer'); 
const uuidv4 = require('uuid/v4');

var storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        var extn = (file.originalname).split('.').pop(); 
        cb(null, uuidv4()+'.'+extn);
    }
 }); 
var upload = multer({ storage: storage }); 

module.exports = upload;