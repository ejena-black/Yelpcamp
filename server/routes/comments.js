const express = require('express'),
      helper = require('../helpers/comments'),
      router  = express.Router()


// INDEX ROUTE
router.route('/')
 .get(helper.getComments)
 .post(helper.createComment)


router.route('/:commentId')
 .get(helper.getComment)
 .put(helper.updateComment)
 .delete(helper.deleteComment)




module.exports = router