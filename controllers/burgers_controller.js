const router = require("express").Router();
const Burger = require("../models/burger");


//router
router.get("/", (req, res)=>{
    Burger.all("*", (results)=>{

        res.render("index", {
            burgers: results
        });
    });
});

router.post( "/api/burgers", (req, res)=>{
    Burger.create( req.body, (result)=>{
        res.json({id: result.insertId});
    })
});

router.put("/api/burger/:id", (req, res)=>{

    Burger.update(req.body, req.params.id, (result)=>{
        res.end();
    });
});

module.exports = router;