/**
 * Created by andrea.terzani on 09/04/2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var UserSchema = new Schema({
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    firstname: {
        type: String,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    facebook: {
        fbid:{
            type: String,
            trim: true
        },
        token:{
            type: String
        },
        displayName:{
            type: String
        },
        email:{
            type: String
        },
        profileUrl:{
            type: String
        }
    }
});

mongoose.model('User', UserSchema);
