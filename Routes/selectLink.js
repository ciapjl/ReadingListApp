const express = require("express");
const User = require("../Models/readingLinks.model");



async function selectLink(req, res, next) {

    if (res.user == undefined){
        return 
    }

    let link;
    const id = req.params.linkID;
  
    try {
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        link = await User.findById(id);
        if (link == null) {
          return res.status(404).json({
            message: `Cannot locate link with id ${id}`,
          });
        }
      } else {
        res.status(400).json({
          message: `Invalid link ID format. This means also that no link exists with this link ID with id ${id}`,
        });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    res.link = link;
  
    next();
  }

module.exports = selectLink