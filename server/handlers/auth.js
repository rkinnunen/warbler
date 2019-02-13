const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = function() {};

exports.signup = async function(req, res, next) {
  try {
    //create user -> create token
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    let token = jwt.sign(
      {
        id,
        username,
        profileImageUrl
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl
    });
  } catch (err) {
    //see error
    //depending on error, send username/email taken or 400
    if (err.code === 11000) {
      //validation failed code
      err.message = "Sorry, that username and/or email is taken";
    }
    return next(err);
  }
};
