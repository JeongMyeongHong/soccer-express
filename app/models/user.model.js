module.exports = mongoose => mongoose.model(
        'user', mongoose.Schema(
                {id : { type: String, required: true, unique: true },
                name : { type: String, required: true, unique: true },
                pw : { type: String, required: true },
                phoneNum : String },
                {timestamps : true} )
)
