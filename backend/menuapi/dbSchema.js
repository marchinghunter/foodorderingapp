const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const database=mongoose
  .createConnection(
    "mongodb+srv://dm6593120:root@cluster0.gw9ki7u.mongodb.net/foodmenu?retryWrites=true&w=majority"
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
