// put

var express = require('express')
var Router = express.Router()
var put_controller_api = require("../Controller/put_method")

Router.put("/:id",put_controller_api.update_data)

module.exports = Router