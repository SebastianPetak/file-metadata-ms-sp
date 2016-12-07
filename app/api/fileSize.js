var multer = require('multer');
var upload = multer();

module.exports = function(file, callback) {
	if (!file) {
		console.log("fileForm submitted without a file\n");
		callback(JSON.stringify({ 'error': 'No file selected' }));
	} else {
		console.log("original name: " + file.originalname + "\n"
							+  "mimetype: " + file.mimetype + "\n"
							+  "Returning file size: " + file.size + "\n");
		callback(JSON.stringify({ 'size': file.size }));
	}
};
