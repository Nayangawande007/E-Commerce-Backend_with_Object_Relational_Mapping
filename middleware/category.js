const category = require("../routes/category");

async function checkNameForCategory(req,res,next){
     const categoryData = req.body;

     if(!category.name){
        res.status(400).send({msg:'name is mandatory'})
        return;
     }
     next()
}

module.exports = { checkNameForCategory }