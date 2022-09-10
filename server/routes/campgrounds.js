const express = require('express'),
    router  = express.Router(),
      {
        getCampgrounds,
        createCampground,
        getCampground,
        updateCampground,
        deleteCampground    } = require('../controllers/campgroundController')


// INDEX ROUTE
router.route('/')
 .get(getCampgrounds)
 .post(createCampground)


router.route('/:id')
 .get(getCampground)
 .patch(updateCampground)
 .delete(deleteCampground)




module.exports = router