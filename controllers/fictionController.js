var _ = require('underscore');

exports.index = function(req, res) {

    var contacts = require('../data/contacts.js');
    var fiction = require('../data/fiction.js');

    var data = {
        'contacts': {
            'links': contacts.items
        },
        'fiction': {
            'title': 'Fiction Friday',
            'items': _.filter(fiction.items, function(item) {
                return item.live;
            })
        }
    };

    res.render("fiction/index", { title: 'stephen fulljames - fiction', data: data });

};

exports.page = function(req,res, next) {
    if (req.url.indexOf('favicon.ico') != -1) return false;

    var contacts = require('../data/contacts.js');
    var fiction = require('../data/fiction.js');

    var selectedArticle = _.find(fiction.items, function(item) {
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

    res.render("fiction/page", { title: 'stephen fulljames - fiction', data: data })
};