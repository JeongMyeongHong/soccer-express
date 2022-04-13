module.exports = mongoose => mongoose.model(
    'todo', mongoose.Schema(
        {task : { type: String, required: true, unique: true }},
        {timestamps : true} )
)
