var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var About = new keystone.List('About', {
	autokey: { from: 'name', path: 'key', unique: true },
});

About.add({
	name: { type: String, required: true },
  description: { type: Types.Html, wysiwyg: true, height: 400 },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
});

About.register();
