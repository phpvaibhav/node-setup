const express 			= require('express');
const expressLayouts 	= require('express-ejs-layouts'); 
const path 				= require('path');
const app 				= express();
const port 				= 3001;
var  bodyParser  		= require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressLayouts);
require('./route/route.js')(app);

app.use(express.static(path.join(__dirname, 'frontend_asset')));
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'application/views/'));
app.set('view engine','html');
app.listen(port, () => console.log(`Example app listening on port ${port}!`))