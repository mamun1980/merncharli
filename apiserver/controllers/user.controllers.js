import User from "../models/user.model.js";

const CreateNewUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username) {
    return res.json({
      error: "Username is required",
    });
  }

  if (!email) {
    return res.json({
      error: "email is required",
    });
  }

  if (!password) {
    return res.json({
      error: "password is required",
    });
  }

  try {
    const email_exist = await User.findOne({ email });
    if (email_exist)
      return res.json({ error: "user exist with email ", email });

    const username_exist = await User.findOne({ username });
    if (username_exist)
      return res.json({ error: "user exist with username ", username });

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.send(error);
  }
};

export default CreateNewUser;
