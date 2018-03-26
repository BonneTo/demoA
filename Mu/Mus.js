var express = require("express")
var fs = require("fs");
var ejs = require("ejs");
var app = express();
var datas = {}
app.engine('html', ejs.renderFile);
app.set("view engin","html");
app.get("/index",function(req,res){
    datas = {url:[],text:[]}
    fs.readdir("D:/Server/Mu/source",function (err,files) {
        files.forEach(function (file) {
            datas.url.push("D:/Server/Mu/source/"+file)
            datas.text.push(file.split(".")[0])
        })    
        // res.send(datas)        
        res.render("Mu.html",datas)
    })
}).listen(8080);