module.exports = mongoose => mongoose.model(
    'board', mongoose.Schema(
        {passengerId : { type: String, required: true, unique: true },
        name : { type: String, required: true, unique: true },
        teamId : { type: String, required: true },
        subject : String },
        {timestamps : true} )
)
