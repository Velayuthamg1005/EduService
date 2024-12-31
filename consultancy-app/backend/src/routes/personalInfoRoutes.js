const express = require('express');
const PersonalInfoModel = require('../models/PersonalInfoModel');
const router = express.Router();


router.post('/save', async (req, res) => {
  try {
    const {
      userEmail,
      fullName,
      gender,
      dob,
      address,
      phoneNumber,
      degree,
      university,
      graduationYear,
      fieldOfStudy,
      school,
      sslcMark,
      hscMark,
      cgpa,
      highestQualification,
      additionalInformation,
    } = req.body;

    const existingInfo = await PersonalInfoModel.findOne({ userEmail });

    if (existingInfo) {
      await PersonalInfoModel.updateOne({ userEmail }, { ...req.body });
      res.json({ message: 'Personal information updated successfully.' });
    } else {
      const personalInfo = new PersonalInfoModel({
        userEmail,
        fullName,
        gender,
        dob,
        address,
        phoneNumber,
        degree,
        university,
        graduationYear,
        fieldOfStudy,
        school,
        sslcMark,
        hscMark,
        cgpa,
        highestQualification,
        additionalInformation,
      });

      await personalInfo.save();
      res.json({ message: 'Personal information saved successfully.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/get/:userEmail', async (req, res) => {
  try {
    const userEmail = req.params.userEmail;
    const personalInfo = await PersonalInfoModel.findOne({ userEmail });

    if (personalInfo) {
      res.json(personalInfo);
    } else {
      res.status(404).json({ message: 'Personal information not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.get('/getAll', async (req, res) => {
  try {
    const allPersonalInfo = await PersonalInfoModel.find();
    res.json(allPersonalInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
