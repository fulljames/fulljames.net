var _ = require('underscore');

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
    };

    res.render("articles/index", { title: 'stephen fulljames - articles', data: data });

};

exports.page = function(req,res, next) {
    if (req.url.indexOf('favicon.ico') != -1) return false;

    var contacts = require('../data/contacts.js');
    var articles = require('../data/articles.js');

    var selectedArticle = _.find(articles.items, function(item) {
        return item.href == req.params.article;
    });

    var data = {
        'contacts': {
            'links': contacts.items
        },
        'article': selectedArticle
    };

    if (!selectedArticle) {
        res.render("errors/404", { title: 'stephen fulljames - 404', data: data} );
        next();
    }

    res.render("articles/page", { title: 'stephen fulljames - articles', data: data })
};