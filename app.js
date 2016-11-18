//load modules
var path = require('path');
var express = require('express');
var app = express();


app.use(express.static(path.join(__dirname + '/client')));
//Set View Engine
app.set('view engine', 'ejs');

app.use('/client', express.static('public'))

//Routes
app.get('/', function(req, res) {
  res.render('index.ejs');
});


app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Server running!");
});
