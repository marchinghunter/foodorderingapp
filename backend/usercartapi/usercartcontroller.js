const usercartmodel = require("./dbSchema");

ordernow = async (req, res) => {
  try {
    const data = req.body;
    const user = await usercartmodel.create(data);
    res.status(200).send("ordered");
  } catch (error) {
    res.status(400).send(error);
  }
};
fetchorderitem = async (req, res) => {
  try {
    const { email } = req.body;
    let order = await usercartmodel.find({ email });
    if (order.length===0) {
      order = "empty";
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { ordernow, fetchorderitem };
