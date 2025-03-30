import User from "../models/login.model.js";

export const getLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  if (user.password !== password) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    success: true,
  });
};
