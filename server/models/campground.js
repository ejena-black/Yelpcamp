const mongoose = require('mongoose')
    //   Comment  = require('./comments')

const campgroundSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId ,
            ref: 'Comment'
        }
    ],
    creator: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    }
})

module.exports = mongoose.model('Campground', campgroundSchema)