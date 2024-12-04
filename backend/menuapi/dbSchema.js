const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const database=mongoose
  .createConnection(
    "MONGODB Link"
  )

const foodmenuSchema = new Schema({
  name: String,
  img: String,
  price: Number,
  details: String,
  cateogary: String,
});

const foodmenuModel = database.model("foodmenus", foodmenuSchema);
module.exports = foodmenuModel;
