// delete

var knex = require("../database_connection/connection")

module.exports.delete_data = (req,res)=>{

    knex('Nav')
        .where('id', req.params.id)
        .del()
        .then((data) => {
            console.log(data);
            res.send("deleted successfully")
        })
        .catch((err) => {
            console.log(err);
            res.json({ "message": err })
        });

}
