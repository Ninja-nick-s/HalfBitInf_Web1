const express = require("express");
const router = express.Router();

// @route GET api/Profile
// @desc Test route
// @access Public

router.get("/", (req, res) => res.send("Share route"));

module.exports = router;
