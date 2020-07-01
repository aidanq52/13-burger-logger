const router = require("express").Router();
const Burger = require("../models/burger");


//router
router.get("/", (req, res)=>{
    Burger.all("*", (results)=>{
        console.log(results)
        res.render("index", {
            burgers: results
        });
    });
});

router.post( "/api/burgers", (req, res)=>{
    Burger.create( res.body, (result)=>{

    })

});

module.exports = router;