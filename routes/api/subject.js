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
      });

      const subject = await newSubject.save();
      res.json(subject);
    } catch (err) {
      console.error(err.meassage);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
