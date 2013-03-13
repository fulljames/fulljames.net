_ = require 'underscore'

getLive = (items) ->
  _.filter items, (item) ->
    item.live

exports.index = (req, res) ->
  contacts = require '../data/contacts.js'
  fiction = require '../data/fiction.js'

  data =
    "contacts":
      "links": contacts.items
    "fiction":
      "title": "Fiction Friday",
      "items": getLive fiction.items

  res.render "fiction/index", { title: 'stephen fulljames - fiction', data: data }

exports.page = (req,res) ->
  return false unless req.url.indexOf('favicon.ico') is -1

  contacts = require '../data/contacts.js'
  fiction = require '../data/fiction.js'

  selectedArticle = _.find fiction.items, (item) ->
    item.href is req.params.article

  data =
    "contacts":
      "links": contacts.items
    "article": selectedArticle

  if selectedArticle
    res.render "fiction/page", { title: 'stephen fulljames - fiction - ' + data.article.label, data: data }
  else
    res.render "errors/404", { title: 'stephen fulljames - 404', data: data}