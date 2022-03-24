const express = require("express");
const User = require("../Models/user.model");

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

router.patch("update/:id", selectUser, (req,res)=>{
  for(prop of req.body){
    if(prop != null){
      req
    }

    
  }
  try{

  }catch(error){
    
  }
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



//function to act as middleware in above in the case in which the 

async function selectUser(req, res, next) {
  let user;
  const id = req.params.id

  try {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      user = await User.findById(id);
      if (user == null) {
        return res.status(404).json({
          message: `Cannot locate User with id ${id}`,
        });
      }
    }else{
      res.status(400).json({message: `Invalid user ID format. This means also that no user exists with this user ID with id ${id}`})
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;
  



  next();
}

module.exports = router;
