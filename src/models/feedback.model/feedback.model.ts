import mongoose from "mongoose";
// Define the schema
const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Gmail: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['travel', 'work', 'personal', 'education', 'other'],
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      user: String,
      comment: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Experience = mongoose.model('Experience', experienceSchema);


export const FindOneEsharing=(gmail:string)=> Experience.findOne({Gmail:gmail})

export const InsertOneEsharing=(data:any)=> new Experience(data).save().then((experience) => experience.toObject());