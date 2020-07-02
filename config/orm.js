const connection = require("./connection");

const orm = {
    selectAll(columns, tableName, cb){
        // SELECT * FROM burgers 
        // SELECT column FROM tableName
        connection.query("SELECT ?? FROM ??", [columns, tableName], (err, results)=>{
            if(err) throw err;
            cb( results );
        });
    },
    insertOne(tableName, values, cb){
        // SET columnOne = "column value", columnTwo = "column value"
        // INSERT INTO tableName SET value;
        connection.query("INSERT INTO ?? SET ?", [tableName, values], (err, results )=>{
            if(err) throw err;
            cb(results);
        });
    },
    updateOne(tableName, newValues, targetId, cb){
        //UPDATE tablename SET values WHERE id = targetId
        connection.query("UPDATE ?? SET ? WHERE id =?", [tableName, newValues, targetId], (err, results)=>{
            if(err) throw err;
            cb(results)
        } )
    }
}

module.exports = orm;