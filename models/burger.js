const orm = require("../config/orm");

const burger = {
    all(columns, cb){
        orm.selectAll(columns, "burgers" , cb )
    },
    update(data, cb){
        orm.insertOne("burgers", data, cb )
    },
    create(){

    }
};

module.exports = burger;