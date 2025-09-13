import mongoose , { Schema } from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
    },
    videoUrl: {
        type: String,
        required: [true, "Video URL is required"],
    },
    thumbnail: {
        type: String,
        required: [true, "Thumbnail is required"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User is required"],
    },
}, { timestamps: true });

const Video = mongoose.model('Video', videoSchema);

export default Video;