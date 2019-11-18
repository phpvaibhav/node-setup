module.exports.home = function (req,res){
	res.render('home',{'title' : 'Home'});
}
module.exports.about = function (req,res){
	res.render('about',{'title' : 'About'});
}
module.exports.contact = function (req,res){
	res.render('contact',{'title' : 'Contact'});
}
module.exports.events = function (req,res){
	res.render('events',{'title' : 'Events'});
}
module.exports.whatWeDo = function (req,res){
	res.render('whatWeDo',{'title' : 'What We Do'});
}
module.exports.popularCourses = function (req,res){
	res.render('popularCourses',{'title' : 'Popular Courses'});
}
module.exports.statistics = function (req,res){
	res.render('statistics',{'title' : 'Statistics'});
}
module.exports.gallery = function (req,res){
	res.render('gallery',{'title' : 'Gallery'});
}

module.exports.login = function (req,res){
	res.render('login',{'title' : 'Login'});
}
module.exports.register = function (req,res){
	res.render('register',{'title' : 'Register'});
}
