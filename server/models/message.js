const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxLength: 160
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

messageSchema.pre("remove", async function(next) {
  //find user, remove message from user's messages array, save user
  try {
    let user = await User.findById(this.user);
    user.message.remove(this.id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
