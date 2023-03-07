const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const database = mongoose.createConnection(
  "mongodb+srv://dm6593120:root@cluster0.gw9ki7u.mongodb.net/usercart?retryWrites=true&w=majority"
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
