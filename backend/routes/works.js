const express = require("express");
const Work = require("../models/workModel");
const {
  createWorkPin,
  getWork,
  getWorks,
  deleteWork,
  updateWork,
} = require("../controllers/workControllers");

const router = express.Router();

//get all the works
router.get("/", getWorks);
//select a single post
router.get("/:id", getWork);
//post a new work
router.post("/", createWorkPin);
//delete a post
router.delete("/:id", deleteWork);
//update a post
router.patch("/:id", updateWork);

module.exports = router;
