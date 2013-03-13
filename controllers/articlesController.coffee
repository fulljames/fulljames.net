_ = require 'underscore'

getLive = (items) ->
  _.filter items, (item) ->
    item.live

exports.index = (req, res) ->
  contacts = require '../data/contacts.js'
  articles = require '../data/articles.js'
  writing = require '../data/external_writing.js'

  data =
    "contacts":
      "links": contacts.items
    "articles":
      "title": "Articles",
      "items": getLive articles.items
    "writing":
      "title": "Elsewhere"
      "links": writing.items

  res.render "articles/index", { title: 'stephen fulljames - articles', data: data }

exports.page = (req,res) ->
  return false unless req.url.indexOf('favicon.ico') is -1

  contacts = require '../data/contacts.js'
  articles = require '../data/articles.js'

  selectedArticle = _.find articles.items, (item) ->
      item.href is req.params.article

  data =
    "contacts":
      "links": contacts.items
    "article": selectedArticle

  template = if selectedArticle then "articles/page" else "errors/404"
  res.render template, { title: 'stephen fulljames - articles', data: data }