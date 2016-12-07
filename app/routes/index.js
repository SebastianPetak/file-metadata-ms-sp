var multer = require('multer');
var upload = multer();
var fileSize = require('../api/fileSize.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index.ejs'); 
	});
	
	// fileForm submissions from index.ejs, returns file size
	app.post('/getFileSize', upload.single('fileField'), function(req, res) {
		fileSize(req.file, function(response) {
			res.type('json');
			res.send(response);
		})
	});
};
