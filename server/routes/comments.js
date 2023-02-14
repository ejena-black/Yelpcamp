const express = require('express'),
      router  = express.Router(),
      {
        getComments,
        createComment,
        getComment,
        updateComment,
        deleteComment} = require('../controllers/commentController')


// INDEX ROUTE
router.route('/')
 .get(getComments)
 .post(createComment)


router.route('/:id')
 .get(getComment)
 .patch(updateComment)
 .delete(deleteComment)




module.exports = router