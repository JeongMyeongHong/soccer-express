export default function TodoModel(mongoose) {
    mongoose.model('todo', mongoose.Schema({
        userid: String,
        task: String,
        complete: String
    }, {timestamps: true}))
}