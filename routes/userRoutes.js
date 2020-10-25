const express = require("express");
const route = express.Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

//Auth Route
route.get("/auth", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    res.json(user);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
});

//Register Route

route.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //Check if user exist
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User Already Exist" }] });
      }

      //Create new user
      user = new User({
        name,
        email,
      });

      //encrypt the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      res.send("Registered Success");
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

//Login Route

route.post(
  "/login",
  [
    check("email", "Email is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Cradentials" }] });
      }
      //check hashed password
      const decoded = await bcrypt.compare(password, user.password);
      if (!decoded) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Cradentials" }] });
      }

      //Sign JWT
      const payload = {
        id: user._id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);

      res.json({ token });
    } catch (err) {}
  }
);

route.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = route;
