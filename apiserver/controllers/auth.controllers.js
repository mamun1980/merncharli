import { comparePassword } from "../helpers/utils.js";
import User from "../models/user.model.js";

const loginController = async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.findOne({username})
        if(!user) return res.json({error: "User not found"})

        const match = await comparePassword(password, user.password)
        if(match){
            return res.json("Success")
        } else{
            return res.json({error: "Authentication error!"})
        }

    } catch (error) {
        
    }
    res.send({ username, password });
};

const registerController = (req, res) => {
  const { username, email, password } = req.body;
  res.send({ username, email, password });
};

export { loginController, registerController };
