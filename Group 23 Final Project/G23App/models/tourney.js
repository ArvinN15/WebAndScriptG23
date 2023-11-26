let mongoose = require('mongoose');

// create a model class
let tourneyModel = mongoose.Schema({
    TournamentName:String,
    StartDate:String,
    EndDate:String
},
{
    collection:"tourney"
});
module.exports = mongoose.model('Tournament',tourneyModel);
