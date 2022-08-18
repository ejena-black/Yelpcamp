const mongoose = require('mongoose');

    // Mongoose debug mode
mongoose.set('debug', true);
    // Linking to mongodb 
mongoose.connect('mongodb://localhost/yelp_camp');

mongoose.Promise = Promise;

module.exports.Campground = require('./campground');
module.exports.Comment= require('./comment');