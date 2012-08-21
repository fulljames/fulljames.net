exports.index = function (req, res) {

    var contacts = require('../data/contacts.js');
    var projects = require('../data/projects.js');
    var articles = require('../data/articles.js');
    var writing = require('../data/external_writing.js');
    var tools = require('../data/tools.js');

    var data = {
        'contacts': {
            'links': contacts.items
        },
        'writing': {
            'title': 'Recent writing',
            'int': {
                'title': 'Here',
                'links': articles.items
            },
            'ext': {
                'title': 'Elsewhere',
                'links': writing.items
            }
        },
        'projects': {
            'title': 'Projects',
            'items': projects.items
        },
        'tools': {
            'title': 'Tools I Use',
            'items': tools.items
        }
    };

    res.render("home", { title: 'stephen fulljames', data: data });
};