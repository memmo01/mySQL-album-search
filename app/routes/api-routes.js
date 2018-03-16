var connection = require("../config/connection.js");


module.exports=function(app){
    
    app.get("/api/all",function(req,res){
        connection.query("SELECT * FROM top_albums", function(err,result){
            res.json(result);
        })
    })

    app.get("/api/artist/:name?",function(req,res){
        connection.query("SELECT * FROM top_albums WHERE artist = ?",[req.params.name], function(err,result){
            res.json(result);
        })
    })

    app.get("/api/position/:rank?",function(req,res){
        connection.query("SELECT * FROM top_albums WHERE position <= ?",[req.params.rank], function(err,result){
            res.json(result);
        })
    })

    app.get("/api/year/:start?/:finish?",function(req,res){
        connection.query("SELECT * FROM top_albums WHERE year >= ? AND year <= ?",[req.params.start, req.params.finish], function(err,result){
            res.json(result);
        })
    })
    app.get("/api/album/:title?/",function(req,res){
        connection.query("SELECT * FROM top_albums WHERE album = ?",[req.params.title], function(err,result){
            res.json(result);
        })
    })



   
}