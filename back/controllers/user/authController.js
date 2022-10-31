import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../../helpers/generateToken.js";

// Auth user
// POST /api/users/login
// Access public

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id); //Create token
    res.json({ user, token });
  } else {
    res.status(401);
    throw new Error("Неправильный email или пароль");
  }
});
