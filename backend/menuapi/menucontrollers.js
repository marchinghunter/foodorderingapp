const foodmenuModel = require("./dbSchema");

updateFoodmenubyName = async (req, res) => {
  try {
    const data = req.body;
    const updatedData = await foodmenuModel.updateOne(
      req.params,
      { $set: data },
      { new: true }
    );
    res.status(201).send(updatedData);
  } catch (error) {
    res.status(400).send(error);
  }
};

getFoodmenu = async (req, res) => {
  try {
    const data = await foodmenuModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};
getFoodmenubyName = async (req, res) => {
  try {
    const data = await foodmenuModel.find(req.params);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = {
    updateFoodmenubyName,
    getFoodmenu,
    getFoodmenubyName
};
