const express = require('express');
const expressListRoutes = require('express-list-routes');
const mongoose = require('mongoose');
const AutoIncrementFactory = require('mongoose-sequence');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path')
var cors = require('cors');
const User = require('./model/user.model')
const ora = require('ora');
const route = require('./routes/users.routes');
const aut = require('./routes/Aut.routes');
const offer=require('./routes/offer.routes');

require("dotenv").config({
 path: path.join(__dirname, "../.env")
});

const app = express();

const PORT = process.env.PORT || 3000;

mongoose
 .connect('mongodb://localhost:27017/Application',{ useUnifiedTopology: true , useNewUrlParser: true })
 .then(() => {
  console.log('Connected to the Database successfully');
  expressListRoutes(app, { prefix: '/api' });
 });
const AutoIncrement = AutoIncrementFactory(mongoose);
app.use(bodyParser.urlencoded({ extended: true }));//obsolète
app.use(bodyParser.json());

//token verification
app.use(async (req, res, next) => {
 if (req.headers["x-access-token"]) {
  const accessToken = req.headers["x-access-token"];// le middleware recupére le token du header x-acess-token
  const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
  console.log(process.env.JWT_SECRET);

  // puis il vas use la clef secrete utilisée pour signer le jeton pour vérifier que le jeton n'a pas été compromis.

  // Check if token has expired
  if (exp < Date.now().valueOf() / 1000) {
   return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
  }
  // nous ajoutons  une vérification  pour nous assurer que le jeton n'a pas expiré
  res.locals.loggedInUser = await User.findById(userId);
  next();
 } else {
  next();
 }
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost:8081"),
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
  next()
});
app.use(cors());
app.use('/', route);
app.use('/', aut);
app.use('/', offer);

app.listen(PORT, () => {
  const spinner = ora('Listening to ports...').start();
  console.log('\nServer is listening on Port:', PORT)
  spinner.stop();
});
