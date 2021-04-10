const User = require("../models/User");
const app = express();

// check to make sure email provided is not registered
app.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "A user has already registered with this email" });
    } else {
      // Otherwise create a new user
      const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save();
      return res.status(200).json({ msg: newUser });
    }
  });
});

app.post("/submit", ({ body }, res) => {
  const user = new User(body);
  user.setFullName();
  user.lastUpdatedDate();

  User.create(user)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = Routes;
