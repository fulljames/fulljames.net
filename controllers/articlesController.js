exports.index = function(req, res) {

    var contacts = require('../data/contacts.js');
    var articles = require('../data/articles.js');
    var writing = require('../data/external_writing.js');

    var data = {
        'contacts': {
            'links': contacts.items
        },
        'articles': {
            'title': 'Articles',
            'items': articles.items
        },
        'writing': {
            'title': 'Elsewhere',
            'links': writing.items
        }
    }

    res.render("articles/index", { title: 'stephen fulljames - articles', data: data });

};