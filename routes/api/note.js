const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");
const Note = require("../../models/Notes");
const User = require("../../models/User");

router.post(
  "/",
  auth,
  check("content", "content is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");

      const newNote = new Note({
        content: req.body.content,
        topic: req.body.topic,
        user: req.user.id,
        subject: req.body.subject,
      });

      const note = await newNote.save();
      res.json(note);
    } catch (err) {
      console.error(err.meassage);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
