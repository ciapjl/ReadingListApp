const express = require("express");
const User = require("../Models/user.model");
const readingLinks = require('../Models/readingLinks.model')

router = express.Router();

//get all links for one user



router.get("/", (req, res) => {
    readingLinks.find()
      .then((allLinks) => res.status(200).json(allLinks))
      .catch((error) => res.status(500).json({ error: error.message }));
  });




router.post('/user/:userID/add', (req,res)=>{


    const link = req.body.links.link
    const userID = req.params.userID;
    console.log(`You added the link ${link} and ${userID}`)

    let newLink;
    try{
         newLink = new readingLinks({"links": {"link":link}, userID})     
    newLink.save()
    .then(() => res.status(200).json(`Link ${link} added to user with userID ${userID}`))

    }catch{
        res.status(400).json('Error cannot add link')
    }
});  

async function selectUser(req, res, next) {
  let user;
  const id = req.params.userID;

  try {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      user = await User.findById(userID);
      if (user == null) {
        return res.status(404).json({
          message: `Cannot locate User with id ${userID}`,
        });
      }
    } else {
      res
        .status(400)
        .json({
          message: `Invalid user ID format. This means also that no user exists with this user ID with id ${id}`,
        });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;

  next();
}

async function selectLinks(selectLinks, req, res, next) {
  let readingLinks;
  const id = req.params.linksID;

  try {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      user = await readingLinks.findById(linksID);
      if (user == null) {
        return res.status(404).json({
          message: `Cannot locate User with id ${id}`,
        });
      }
    } else {
      res
        .status(400)
        .json({
          message: `Invalid user ID format. This means also that no user exists with this user ID with id ${id}`,
        });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;

  next();
}


async function selectLinks(selectUser, req, res, next){

}

module.exports = router;
