import mongoose from 'mongoose';

const partnerUniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const PartnerUniversity = mongoose.model('PartnerUniversity', partnerUniversitySchema);

export const InsertOnePartnerUniversity = (data: any) => {
  return new PartnerUniversity(data).save().then((university) => university.toObject());
};

export const FindAllPartnerUniversities = () => {
  return PartnerUniversity.find();
};
