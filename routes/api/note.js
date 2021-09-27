const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");
const Note = require("../../models/Notes");
const User = require("../../models/User");
//
router.post(
  "/:subjectid",
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
        topic: req.body.topic,
        content: req.body.content,
        user: user.id,
        subjectid: req.params.subjectid,
      });

      const note = await newNote.save();
      res.json(note);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/:subjectid", auth, async (req, res) => {
  try {
    const notes = await Note.find({
      user: req.user.id,
      subjectid: req.params.subjectid,
    });
    if (!notes) {
      return res.status(404).json({
        msg: "notes not found",
      });
    }
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/single/:id", auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({
        msg: "note not found",
      });
    }
    res.json(note);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({
        msg: "note not found",
      });
    }
    res.status(500).send("Server Error");
  }
});

router.delete("/:subjectid", auth, async (req, res) => {
  try {
    const notes = await Note.find({
      user: req.user.id,
      subjectid: req.params.subjectid,
    });
    if (!notes) {
      return res.status(404).json({
        msg: "note not found",
      });
    }

    await Note.deleteMany({
      user: req.user.id,
      subjectid: req.params.subjectid,
    });
    res.json({ msg: "notes removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/single/:id", auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({
        msg: "note not found",
      });
    }
    // check user
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }
    await Note.deleteOne({ _id: req.params.id });
    res.json({ msg: "note removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({
        msg: "note not found",
      });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;

// router.get("/", auth, async (req, res) => {
//   try {
//     const notes = await Note.find().sort({ date: -1 });
//     res.json(notes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// router.get("/:id", auth, async (req, res) => {
//   try {
//     const note = await Note.findById(req.params.id);
//     if (!note) {
//       return res.status(404).json({
//         msg: "note not found",
//       });
//     }
//     res.json(note);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({
//         msg: "note not found",
//       });
//     }
//     res.status(500).send("Server Error");
//   }
// });

// router.get("/:user/:subject/:topic", auth, async (req, res) => {
//   try {
//     const note = await Note.findOne({
//       user: req.params.user,
//       subject: req.params.subject,
//       topic: req.params.topic,
//     });
//     if (!note) {
//       return res.status(404).json({
//         msg: "note not found",
//       });
//     }
//     res.json(note);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });
