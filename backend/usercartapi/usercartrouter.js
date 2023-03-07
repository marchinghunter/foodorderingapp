const {Router} = require('express')
const {fetchorderitem,ordernow} = require('../usercartapi/usercartcontroller')

const router = Router();

router.post('/ordernow',ordernow)
router.post('/fetchordered',fetchorderitem)
module.exports = router;