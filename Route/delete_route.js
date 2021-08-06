// delete

const express = require("express")

var Router = express.Router()
var delete_controller_api = require('../Controller/delete.method') 

Router.delete("/:id",delete_controller_api.delete_data)

module.exports = Router

