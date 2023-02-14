const mongoose = require('mongoose');

    // Mongoose debug mode
mongoose.set('debug', true);
    // Linking to mongodb 
mongoose.connect('mongodb://localhost/yelp_camp');

mongoose.Promise = Promise;

module.exports.Campground = require('./campgroundModel');
module.exports.Comment    = require('./commentModel');
module.exports.User       = require('./userModel')