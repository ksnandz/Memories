import mongoose, { mongo } from 'mongoose';

const postShema = mongoose.Schema({
  title: String,
  message, String,
  creator, String,
  tags: [Strings],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }, 
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;