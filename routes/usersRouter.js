const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/register", async (req, res) => {
  try {
    const { hrid, password } = req.body;

    const newUser = new User({
      
      hrid,
      password,
    });

    const savedUser = await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/logins", async (req, res) => {
  const { hrid, password } = req.body;

  try {

    const foundUser = await User.findOne({ hrid: hrid,password: password });

    if (foundUser) {
      const temp = {
        name:foundUser.name,
        hrid: foundUser.hrid,
        isAdmin: foundUser.isAdmin,
        _id: foundUser._id,
      };
      res.send(temp);
    } else {
     return res.status(400).json({ message: "Login Failed" });
    }
  } catch (error) {
   return res.status(400).json({ error });
  }
});

module.exports = router;