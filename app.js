var express= require("express");// variable set
var bodyparser = require("body-parser");
var chalk = require("chalk")// to change color require chalk
var path = require("path");
var app= new express();// app function provided
var nav=[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'},
        {link:'/books/addbooks',title:'Add Books'}];
var booksRouter = require('./src/routes/BokksRouter')(nav);
var authorsRouter = require('./src/routes/AuthorsRouter')(nav);
app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyparser.urlencoded({extented:true}))
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.set('views','./src/views');
app.set('view engine','ejs');


app.get("/",function(req,res){
   /* res.send("the big world")*/
//    res.sendFile(__dirname+"/src/views/index.html"); //html files into browser
// res.sendFile(path.join(__dirname,"/src/views/index.html"));// path provided
res.render('index.ejs',{nav,title:"Library"});// ejs added fo give data
});// get function to get the element in localhost
//response get

// app.get("/books",function(req,res){
//     res.render("books.ejs",{nav,title:"Books",books});// when type localhost:3000/library get the haii everyone
// });

// app.get("/books/:id",function(req,res){
    


// })
app.get("/login",function(req,res){
    res.render("login.ejs",{title:"Log In"});
})
app.get("/signup",function(req,res){
    res.render("signup.ejs",{title:"Sign Up"});
})
app.get("/authors",function(req,res){
    res.render("authors.ejs",{nav,title:"Authors"});// when type localhost:3000/library get the haii everyone
});
app.listen(3000,function(){
    console.log("listening to port"+chalk.red('3000'));// print the listen to port on output
});// when using the chalk the color should be changed
