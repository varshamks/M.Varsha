import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Gmail: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  },
  CurrentCountry: {
    type: String,
    required: true
  },
  AbroadCountry: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

export const FindOne=(gmail:string)=> User.findOne({Gmail:gmail})

export const InsertOneAuth=(data:any)=> new User(data).save().then((User)=>User.toObject())