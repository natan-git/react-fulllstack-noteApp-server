const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const noteRoutes = require('./routes/noteRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(bodyParser.json()); // create the req.body object - from json
app.use(bodyParser.urlencoded({ extended: false })); // create the req.body object
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    secret: 'sxjbijxixszaixsax76x87a6sxbash',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
  // var allowCrossDomain = function (req, res, next) {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type');
  //   next();
  // };
  // app.use(allowCrossDomain);
} else {
  var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  };
  app.use(allowCrossDomain);

  const corsOptions = {
    origin: [
      'http://127.0.0.1:5000',
      'http://localhost:5000',
      'http://127.0.0.1:3000',
      'http://localhost:3000',
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true
// };

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('public'));

//   // app.use(express.static(path.resolve(__dirname, 'public')));
// } else {
//   var allowCrossDomain = function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   };
//   app.use(allowCrossDomain);
// }

noteRoutes(app);
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
