const express = require('express'),
      helper = require('../helpers/campgrounds'),
      router  = express.Router()


// INDEX ROUTE
router.route('/')
 .get(helper.getCampgrounds)
 .post(helper.createCampground)


router.route('/:campgroundId')
 .get(helper.getCampground)
 .put(helper.updateCampground)
 .delete(helper.deleteCampground)




module.exports = router