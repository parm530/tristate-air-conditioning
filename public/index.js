// $('#projects-carousel').carousel({
// 	interval: false
// });

// requires nodeJS and express frameworks
const express = require('express');
const app = express();

// grants server access to any static files within the public folder
app.use(express.static('public'));

// sets the homepage of the site to index.html
app.get('/', (req, res) => {
	res.sendFile('index.html', {root: __dirname + '/public/'});
})

// run server on port 5000, essential for hosting on Heroku
app.listen(process.env.PORT || 5000)