const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");
const Rnotes = require("../../models/Share");
const User = require("../../models/User");

router.post(
  "/",
  auth,
  [
    check("content", "content is required").notEmpty(),
    check("email", "please enter valid email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const toemail = req.body.email;
      const touser = await User.findOne({ email: toemail }).select("-password");
      try {
        const Shnote = new Rnotes({
          topic: req.body.topic,
          content: req.body.content,
          user: touser.id,
          recemail: user.email,
        });

        const note = await Shnote.save();
        res.json(note);
      } catch (err) {
        console.error(err.message);
        res.status(404).send("user not found");
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/", auth, async (req, res) => {
  try {
    const rnotes = await Rnotes.find({ user: req.user.id });
    if (!rnotes) {
      return res.status(404).json({
        msg: "shared note not found",
      });
    }
    res.json(rnotes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const rnote = await Rnotes.findById(req.params.id);
    if (!rnote) {
      return res.status(404).json({
        msg: "shared note not found",
      });
    }
    await Rnotes.deleteOne({ _id: req.params.id });
    res.json({ msg: "shared note removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({
        msg: "snote not found",
      });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
