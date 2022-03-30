const express = require("express");
const User = require("../Models/user.model");
const selectUser = require('./selectUser')



router = express.Router();

// get all users

router.get("/", (req, res) => {
  User.find()
    .then((allUsers) => res.status(200).json(allUsers))
    .catch((error) => res.status(500).json({ error: error.message }));
});

//create/post a user

router.post("/add", (req, res) => {
  const username = req.body.username;
  let lastName = null;
  let firstName = null;
  if (req.body.firstName && req.body.lastName) {
    firstName = req.body.firstName;
    lastName = req.body.lastName;
  }

  const newUser = User({ username, lastName, firstName });

  newUser
    .save()
    .then(() =>
      res.status(201).json(`User with username ${req.body.username} added`)
    )
    .catch((error) => res.status(400).json({ error: error.message }));
});

//updating a user

router.patch("/:id", selectUser, (req,res)=>{
  for(prop of Object.keys(req.body)){
    console.log(prop)
    if(prop != null){
      console.log(req.body[prop])
      res.user[prop] = req.body[prop];
    }
  }
    res.user.save()
    .then(()=>res.json(res.user))
    .catch(error => res.status(400).json({message: error.message}))
})


//get a single user

router.get("/:id", selectUser, (req, res) => {
  console.log(`in the get ${res.user}`)
  res.json(res.user);
});

//delete user

router.delete("/:id", selectUser, (req, res) => {
  res.user.remove()
  .then(()=> res.status(201).json(`Deleted user ${req.params.id} with username: ${res.user.username}`))
  .catch(error => res.status(500).json({ error: error.message }))
});




module.exports = router;
