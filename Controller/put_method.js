// put

var knex = require('../database_connection/connection')
module.exports.update_data = (req,res)=>{

    knex('Nav')
        .where('id', '=', req.params.id)
        .update({
            id:req.body.id, 
            Name: req.body.Name,
            email: req.body.email,
            // password: req.body.password
        })
        .then((data) => {
            console.log(data);
            res.send("updated successfully")
        })
        .catch((err) => {
            console.log(err);
            res.json({ "message": err})
        });

}
