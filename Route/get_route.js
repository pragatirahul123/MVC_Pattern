
// get 

var express = require('express')
var Router = express.Router()
var get_controller_api = require ('../Controller/get_method')

Router.get("/",get_controller_api.read_data)


module.exports = Router
