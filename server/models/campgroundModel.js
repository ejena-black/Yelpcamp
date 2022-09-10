const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    //   Comment  = require('./comments')

const campgroundSchema = Schema({
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
}, { timestamps: true })

module.exports = mongoose.model('Campground', campgroundSchema)