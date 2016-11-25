var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'about';

	view.query('about', keystone.list('About').model.find());

	// Render the view
	view.render('about');

};
