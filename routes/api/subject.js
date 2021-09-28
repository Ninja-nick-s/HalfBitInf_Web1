const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");
const Subject = require("../../models/Subject");
const User = require("../../models/User");

router.post(
  "/",
  auth,
  check("subname", "subject name is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");

      const newSubject = new Subject({
        user: req.user.id,
        subname: req.body.subname,
        description: req.body.description,
      });

      const subject = await newSubject.save();
      res.json(subject);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/", auth, async (req, res) => {
  try {
    const subject = await Subject.find({ user: req.user.id });
    if (!subject) {
      return res.status(404).json({
        msg: "subject not found",
      });
    }
    res.json(subject);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) {
      return res.status(404).json({
        msg: "subject not found",
      });
    }
    // check user
    if (subject.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }
    await Subject.deleteOne({ _id: req.params.id });
    res.json({ msg: "subject removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({
        msg: "subject not found",
      });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
