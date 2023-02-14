const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');


const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static user signup method
userSchema.statics.signup = async function(email, password) {

    // Validation
    if(!email || !password){
        throw Error('All feilds must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('You must use an actual email')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is too weak')
    }

    // check if email is already registered
    const exists = await this.findOne({ email }) 
    if(exists){
        throw Error('This Email is registered to another account')
    }

    // generate salt and hashing password
    const salt = await bcrypt.genSalt(15);
    const hash = await bcrypt.hash(password, salt);

    // storing hashed password with email
    const user = await this.create({ email, password: hash })

    return user

}


// static login method
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('All feilds must be filled')
    }

    // check if user email is in the database
    const user = await this.findOne({ email }) 
    if(!user){
        throw Error('Incorrect Email')
    }

    // check inputed password against hashed password in the database
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Incorrect password')
    }

    return user

}


// userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema)