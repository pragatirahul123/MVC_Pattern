// post

var express = require('express')
var Router = express.Router()
var post_controller_api = require ('../Controller/post_method')

Router.post("/",post_controller_api.create_data)


module.exports = Router