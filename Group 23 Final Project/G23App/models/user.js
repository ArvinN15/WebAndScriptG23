let mongoose = require('mongoose');
let passportLocalMongoose = require('mongoose-local-mongoose');

let User = mongoose.Schema({
    username:
    {
        type:String,
        default:'',
        trim:true,
        required: 'Username is required'
    },
    email:
    {
        type:String,
        default:'',
        trim:true,
        required: 'Email is required'
    },
    password:
    {
        type:String,
        default:'',
        trim:true,
        required: 'Password is required'
    },
    created:
    {
        type:Date,
        default:Date.now
    },
    update:
    {
        type:Date,
        default:Date.now
    },

},
{
    collection: "user"
});

//configure the options for the users
let options = ({MissingPassordError : 'Wrong/Missing Password'});
User.plugin(passportLocalMongoose,options);
module.exports.User = mongoose.model('User',User);