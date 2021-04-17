const userController = require ('../../controllers/userController')
const router = require("express").Router();



// /api/user/register (this is the path)
router.route('/register') 
  .post(userController.create);

router.route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);




// check to make sure email provided is not registered
// router.post("/register", (req, res) => {
//   User.findOne({ email: req.body.email }).then((user) => {
//     if (user) {
//       return res
//         .status(400)
//         .json({ email: "A user has already registered with this email" });
//     } else {
//       // Otherwise create a new user
//       const newUser = new User.create({
//         userName: req.body.userName,
//         email: req.body.email,
//         password: req.body.password,
//       });
//       newUser.save();
//       return res.status(200).json({ msg: newUser });
//     }
//   });
// });



// router.post("/api/user/login"), (req, res) => {

//   res.json({
//     email: req.user.email,
//     id: req.user.id,
//     username: req.user.username
//   });
// };
// router.post("/login", async (req, res) => {
//   var newUser = {};
//   newUser.name = req.body.Username;
//   newUser.email = req.body.email;
//   newUser.password = req.body.password;

//   await User.findOne({ name: newUser.name })
//     .then(profile => {
//       if (!profile) {
//         res.send("User not exist");
//       } else {
//         if (profile.password == newUser.password) {
//           res.send("User authenticated");
//         } else {
//           res.send("User Unauthorized Access");
//         }
//       }
//     })
//     .catch(err => {
//       console.log("Error is ", err.message);
//     });
// });


/* app.post("/submit", ({ body }, res) => {
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
}); */

module.exports = router;
