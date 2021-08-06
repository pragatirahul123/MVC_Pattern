var express =  require('express')
var router = express.Router()


var calling_api_post = require('./post_route')

var calling_api_get = require('./get_route')

var calling_api_put = require('./put_route')

var calling_api_delete = require('./delete_route')

router.use("/create",calling_api_post)

router.use("/read",calling_api_get)

router.use("/update",calling_api_put)

router.use("/delete",calling_api_delete)

module.exports = router


