const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const bcrypt = require("bcrypt");

const database = mongoose.createConnection(
  "MongoDB LINK"
);

const userDataSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter an name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Please enter an password"],
  },
});
userDataSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const userDataModel = database.model("useraccountdatas", userDataSchema);
module.exports = userDataModel;
