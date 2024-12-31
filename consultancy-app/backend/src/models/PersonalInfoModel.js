const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
  userEmail: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  degree: { type: String, required: true },
  university: { type: String, required: true },
  graduationYear: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  school: { type: String, required: true },
  sslcMark: { type: String, required: true },
  hscMark: { type: String, required: true },
  cgpa: { type: String, required: true },
  highestQualification: { type: String, enum: ['SSC', 'HSC', 'UG', 'PG'], required: true },
  additionalInformation: { type: String },
}, { collection: 'personalinfos' });

const PersonalInfoModel = mongoose.model('PersonalInfo', personalInfoSchema);

module.exports = PersonalInfoModel;
