import mongoose, { Schema, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: 'string',
      required: true
    },
    content: {
      type: 'string',
      required: true
    },
    img: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    isFeatured: {
      type: 'boolean',
      default: false,
    },
    approved: {
      type: 'boolean',
      default: false,
    },
  },
  // tags: { type: [String] },
  { timestamps: true }

);


const Post = models.Post || mongoose.model("Post", PostSchema);

export default Post;