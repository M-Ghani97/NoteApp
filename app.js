var express = require("express");
var mongoose =  require("mongoose");
var bodyParser = require("body-parser");
var expressLayout = require("express-ejs-layouts");
var methodOverride = require("method-override");
var noteRoute = require("./routes/noteRoute");
var seedDB = require("./seed");

//Mongoose Config
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true)

//connect to database
mongoose.connect("mongodb://localhost/my_notes")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressLayout); 
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(noteRoute);

// seedDB();

//Configuring Port
app.listen(3000, () => console.log("Server Started"));