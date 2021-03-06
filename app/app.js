const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const MongoURI = process.env.MONGODB_URI || "mongodb://localhost/recruiter-router";
console.log(`Beginning DB connection at ${MongoURI}...`);
mongoose
  .connect(
    MongoURI,
    { useMongoClient: true }
  )
  .then(() => console.log("DB connection successful"))
  .catch(err => {
    console.log("Could not connect to DB; make sure `mongod` is running");
  });

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const index = require("./routes/index");
const auth = require("./routes/api/authentication");
const portfoliosManage = require("./routes/api/portfolios-manage");
const linksManager = require("./routes/api/links-manager");

const portfolio = require("./routes/portfolios");

const app = express();

if (process.env.NODE_ENV === "development") app.listen(3000);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

const User = require("./models/User");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// HTML / Jade rendering
app.use("/", index);
// app.use('/portfolios', portfolios);
// JSON rendering

// PUT ALL API NAMESPACE ABOVE ROUTE MATCHING!!!!!!!!
app.use("/api/authentication", auth);
app.use("/api/portfolio-manager", portfoliosManage);
app.use("/api/links-manager", linksManager);
app.get("/:user/:company", portfolio);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
