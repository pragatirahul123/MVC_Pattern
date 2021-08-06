// post 

var knex = require("../database_connection/connection")


module.exports.create_data = (req,res)=>{
    const userdata={
        Name: req.body.Name,
        email: req.body.email,
        // password: await bcrypt.hash(req.body.password,10)
    }
    knex('Nav').insert(userdata)
    
    .then((data) => {
        console.log(data);
        res.send("user successfully")
    })
        .catch((err) => {
            console.log(err);
            res.json({ "message": err })
        });
    

}

