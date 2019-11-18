home = require("../application/controller/home.js");
module.exports = function(app) {
	
	app.get('/', home.home);
	app.get('/about', home.about);
	app.get('/contact', home.contact);
	app.get('/events', home.events);
	app.get('/whatWeDo', home.whatWeDo);
	app.get('/popularCourses', home.popularCourses);
	app.get('/statistics', home.statistics);
	app.get('/gallery', home.gallery);
	app.get('/login', home.login);
	app.get('/register', home.register);
}