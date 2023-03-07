const {Router} = require('express');
const {
    updateFoodmenubyName,
    getFoodmenu,
    getFoodmenubyName,
  } = require("./menucontrollers");

const router = Router();
router.get("/foodmenu",getFoodmenu);
router.get("/foodmenu/:name",getFoodmenubyName);

module.exports = router;