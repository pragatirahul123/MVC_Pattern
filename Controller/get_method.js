//get  

var knex = require('../database_connection/connection')
module.exports.read_data = (req,res)=>{
    knex.select('*').from('Nav')
    .then((data) => {
        console.log(data);
        res.json({data:data})
})
    .catch((err) => {
        console.log(err);
        res.json({ "message": err })
});

}



