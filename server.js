const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const password = require("./.env");
const username = require("./.env");

//Passport/Bcrypt related imports - enable these if we need to use passport instead of amplify

// const session = require("express-session");
// const passport = require("./config/passport");

// Passport middleware. Enable this *only if* AWS amplify doesn't work.

// app.use(
//   session({ secret: "FIRTT#zRK2CY", resave: true, saveUnitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   next();
// });

const mongoose = require("mongoose");

const url =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.sxlwr.mongodb.net/Userdb?retryWrites=true&w=majority";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/public"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/Userdb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    url
  )
  .then(() => {
    console.log("Database CONNECTED!");
  })
  .catch((err) => {
    console.log("Error connecting to the database. \n" + err);
  });

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
