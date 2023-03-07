const userDataModel = require("./dbSchema");
const Cookies = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "1234", {
    expiresIn: maxAge,
  });
};

signup = async (req, res) => {
  try {
    const data = req.body;
    const user = await userDataModel.create(data);
    const token = await createToken(user.email);
    // Return the token to the client
    res
      .status(201)
      .cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
        sameSite: "strict",
      })
      .send("Cookie set");
  } catch (error) {
    if (error.code === 11000) {
      error.message = "Email already exist";
    }
    res.status(400).send(error);
  }
};

login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let responsetouser = "";
    const data = await userDataModel.findOne({ email });
    if (data === null) {
      responsetouser = "nau";//nau=not a user
    } else {
      responsetouser = await bcrypt.compare(password, data.password);
      if (responsetouser === true) {
        const token = await createToken(data.email);
        // Return the token to the client
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: maxAge * 1000,
          sameSite: "strict",
        });
      }else{
        responsetouser = "pe";//pe=password error
      }
    }
    res.status(200).send(responsetouser);
  } catch (error) {
    res.status(400).send(error);
  }
};
checkUser = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    const user = jwt.verify(token, "1234");
    const checkemail = await userDataModel.findOne({ email: user.id });
    checkuser = { email: checkemail.email, name: checkemail.name };
    if (checkemail) {
      res.json(checkuser);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
logout=async(req, res)=>{
  try {
    res.clearCookie('jwt',{httpOnly:true})
    res.status(200).send('Logged out successfully');
  } catch (error) {
    res.status(400).send(error);
  }
}
module.exports = {
  signup,
  login,
  checkUser,
  logout,
};
