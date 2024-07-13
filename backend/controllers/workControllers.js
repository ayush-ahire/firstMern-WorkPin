const Work = require("../models/workModel");
const mongoose = require("mongoose");

//create a new work pin
const createWorkPin = async (req, res) => {
  try {
    const { title, description } = req.body;
    const Works = await Work.create({ title, description });
    res.status(200).json(Works);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// get all the work
const getWorks = async (req, res) => {
  try {
    const Works = await Work.find({}).sort({ createAt: -1 });
    res.status(200).json(Works);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

//get a single work pin
const getWork = async (req, res) => {
  try {
    const { id } = req.params;
    const Works = await Work.findById(id);
    if (!getWork) {
      res.status(404).json({ error: "work not found" });
    }
    res.status(200).json(Works);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

//delete a particular pin
const deleteWork = async (req, res) => {
  try {
    const { id } = req.params;
    const Works = await Work.findOneAndDelete({ _id: id });
    if (!Works) {
      res.status(404).json({ error: "work not found" });
    }
    res.status(200).json(Works);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

//update
const updateWork = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "work not found" });
  }
  const Works = await Work.findByIdAndUpdate({ _id: id }, { ...req.body });
  if (!Works) {
    res.status(404).json({ error: "work not found" });
  }
  res.status(200).json(Works);
};

module.exports = { createWorkPin, getWorks, getWork, deleteWork, updateWork };
