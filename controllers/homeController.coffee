_ = require 'underscore'

getLive = (items) ->
  _.filter items, (item) ->
    item.live

exports.index = (req, res) ->
  contacts = require '../data/contacts.js'
  projects = require '../data/projects.js'
  fiction = require '../data/fiction.js'
  articles = require '../data/articles.js'
  writing = require '../data/external_writing.js'
  tools = require '../data/tools.js'

  data =
    "contacts":
      "links": contacts.items
    "fiction":
      "title": "Fiction Friday"
      "int":
        "links": getLive fiction.items
    "writing":
      "title": 'Recent articles'
      "int":
        "title": 'Here'
        "links": getLive articles.items
      "ext":
        "title": "Elsewhere"
        "links": writing.items
    "projects":
      "title": "Projects"
      "items": projects.items
    "tools":
      "title": "Tools I Use"
      "items": tools.items

  res.render "home", { title: 'stephen fulljames', data: data }