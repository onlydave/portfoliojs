var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'project';
	locals.filters = {
		post: req.params.post,
	};
	locals.data = {
		posts: [],
	};

	console.log('fuck you whale', locals.filters.post)



	// Load the current post
	view.on('init', function (next) {

		var q = keystone.list('Gallery').model.findOne({
			key: locals.filters.post,
		});

		q.exec(function (err, result) {
			locals.images = result.images;
			console.log(locals.data.images);
			next(err);
		});

	});

	// // Load other posts
	// view.on('init', function (next) {

	// 	var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

	// 	q.exec(function (err, results) {
	// 		locals.data.posts = results;
	// 		next(err);
	// 	});

	// });

	// Render the view
	view.render('project');
};
