const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const database = mongoose.createConnection(
  "MONGODB LINK"
);

const usercartSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  itemlist: {
    items: Array,
    totalitem: Number,
    totalprice: Number,
  },
});

const usercartmodel = database.model("usercart", usercartSchema);
module.exports = usercartmodel;
