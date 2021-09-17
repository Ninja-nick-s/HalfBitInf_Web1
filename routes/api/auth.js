const express = require("express");
const User = require("../../models/User");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route GET api/auth
// @desc authorization
// @access Public

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).send("server error");
  }
});

module.exports = router;
