import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },

    fullName:{
        type: String,
        required: true,
        trim: true,
        index: true,
    },

    avatar:{
        type: String, //cloudinary url 
        required: true,
        
    },

    coverImage:{
        type: String, //cloudinary url
        
    },
    watchhistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
    }],
    password:{
        type: String,
        required: [true, "Password is required"],
    
    },

    refreshToken:{
        type: String,
    }



}
, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;