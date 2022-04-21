export default function UserModel(mongoose){
    const userSchema = mongoose.Schema(
        {   userid: String,
            password: String,  
            email: String,
            name: String,  
            phone: String,
            birth: String,
            address: String
        }, { timestamps: true}
    )
    return mongoose.model('user', userSchema)
}

