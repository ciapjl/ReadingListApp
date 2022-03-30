const express = require("express");
const User = require("../Models/user.model");



async function selectUser(req, res, next) {
    let user;
    const id = req.params.userID;
  
    try {
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        user = await User.findById(id);
        if (user == null) {
          return res.status(404).json({
            message: `Cannot locate User with id ${id}`,
          });
        }
      } else {
        res.status(400).json({
          message: `Invalid user ID format. This means also that no user exists with this user ID with id ${id}`,
        });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    res.user = user;
  
    next();
  }

module.exports = selectUser